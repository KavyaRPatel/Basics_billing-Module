<template>
    <div>
        <form>

            <label for="name">Name:</label>
            <input type="text" id="new-todo-input" name="new-todo" />

            <label for="task">Task:</label>

            <input type="text" id="new-todo-input" name="new-todo" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>


export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
form{
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 20%;
    height: 50%;
    background: #fff;
    
}
button{
    margin-top: 10px;
}
</style>
