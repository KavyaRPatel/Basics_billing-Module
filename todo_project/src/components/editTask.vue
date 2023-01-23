<template>
    <div>
        <form>
            <label for="id">Id:</label>

            <input type="text" id="id" name="id" placeholder="Id" v-model="id" />
            <label for="task">Task:</label>

            <input type="text" id="task" name="task" placeholder="Task" v-model="task" />
            <button class="btn btn-info" v-on:click="editTask">Edit</button>

        </form>

    </div>
</template>

<script>



export default {
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
                id: this.id,
                task: this.task
            }
            console.log(this.id, "id in created");

            this.$emit('editTask', payload)
            //this.clearForm();
        },
        // clearForm() {
        //     this.name = '';
        //     this.task = '';
        // },



    }
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

/* button {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 10%;
    flex-direction: column;
    text-align: center;
} */
</style>
