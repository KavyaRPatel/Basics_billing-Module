<template>
    <div>
        <form >

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" v-model="name" />

            <label for="task">Task:</label>

            <input type="text" id="task" name="task" placeholder="Task" v-model="task" />
            <button v-on:click="addTask()">Add</button>

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
        addTask() {
            console.log(this.name);
            const payload = {
                id: this.id,
                name: this.name,
                task: this.task,

            }
            // console.log(this.name, this.task);

            this.$emit('addTask', payload)
            this.clearForm();
        },
        clearForm() {
            this.name = '';
            this.task = '';
        },
        
        displayTask(){
            this.$emit('displayTask')
        },
    
    
    },
    
}

</script>

<style scoped>
form
 {
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
