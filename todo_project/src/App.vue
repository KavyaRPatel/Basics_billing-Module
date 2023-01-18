<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <button v-on:click="isFormVisible = !isFormVisible">Add Task</button>
    <app-main v-bind:todo="todos"></app-main>
    <app-form v-if="isFormVisible"></app-form>


  </div>

</template>

<script>
import header from './components/Header.vue';
import main from './components/main.vue';
import ToDoForm from "./components/newTaskForm.vue";

export default {
  components: {
    'app-header': header,
    'app-main': main,
    'app-form': ToDoForm

  },
  data() {
    return {
      todos: [
        { id: 1, name: 'Kavya', task: 'Make a todo app' },
        { id: 2, name: 'Ravi', task: 'Complete node tutorial' }
      ],
      isFormVisible: false
    }
  }


}
</script>

<style>
button{
  margin-top: 10px;
  
}
</style>
