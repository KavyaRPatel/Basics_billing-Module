<template>
    <div>

        <form class="form-rounded">
                <label for="task">Task:</label>

                <input type="text" id="task" name="task" placeholder="Task" v-model="task" />
                <button class="btn btn-info" v-on:click="editTask">Edit</button>
        </form>
    </div>
</template>

<script>


//import { eventBus } from "../main"
export default {
    props: {
        editId: {
            type: Number
        }
    },
    data() {
        return {
            id: '',
            name: '',
            task: ''
        }
    },
    methods: {
        editTask() {
            console.log("Edit task");
            const payload = {
                id: this.editId,
                task: this.task
            }

            console.log(this.editId, "id in created");
            console.log(this.task, "task");
            this.$emit('editTask', payload)
            this.clearForm();
        },
        clearForm() {
            this.task = '';
            this.id = ''
        },



    },
    // created() {
    //     eventBus.$on('edit', (id) => {
    //         this.eventID = id;
    //     })
    // }
}






</script>

<style scoped>
form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    background: #fff;
    margin-left: 20%;
}
.form-rounded{
    border-radius: 1px;
    border: 1px solid rgb(0, 0, 0);
    width: 27%
    
}
button {
    margin-top: 10px;
    width: 40%;
margin-bottom: 10px;
}
</style>
