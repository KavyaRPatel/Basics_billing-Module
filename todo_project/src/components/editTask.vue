<template>
    <div>
        
        <form v-on:submit.prevent>

            <label for="task">Task:</label>

            <input type="text" id="task" name="task" placeholder="Task" v-model="task" />
            <button class="btn btn-info" v-on:click="editTask">Edit</button>

        </form> 

    </div>
</template>

<script>


//import { eventBus } from "../main"
export default {
    props:{
        editId:{
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
            // const payload = {
            //     id: this.id,
            //     task: this.task
            // }

            //console.log(id, "id in created");
            //this.$emit('editTask', payload)
            //this.clearForm();
        },
        // clearForm() {
        //     this.name = '';
        //     this.task = '';
        // },



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
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    background: #fff;

}

button {
    width: 10%;

}
</style>
