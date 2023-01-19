<template>
    <div>
        <form v-on:submit.prevent>

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" v-model="name" />

            <label for="task">Task:</label>

            <input type="text" id="task" name="task" placeholder="Task" v-model="task" />
        </form>
        <button v-on:click="addTask">Add</button>

    </div>
</template>

<script>


export default {
    data() {
        return {
            name: '',
            task: ''
        }
    },
    methods: {
        addTask() {
            console.log(this.name);
            const payload = {
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
        displayTodos() {
            this.$emit('displayTodos')

        }

    }

}

</script>

<style scoped>
form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 20%;
    height: 50%;
    background: #fff;

}

button {
    margin-top: 10px;
}
</style>
