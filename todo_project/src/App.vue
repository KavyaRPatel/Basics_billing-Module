<template>
  <div>
    <app-header></app-header>
    <button v-on:click="isFormVisible = !isFormVisible">Add Task</button>
    <app-main v-bind:todos="todos"></app-main>
    <app-form v-if="isFormVisible" v-on:addTask="updateTask($event)"></app-form>
    <div class="row mrgnbtm">
      <Tasks v-if="todos.length > 0" :todos="todos" />
    </div>

  </div>

</template>

<script>
//import { response } from 'express';
import header from './components/Header.vue';
import main from './components/main.vue';
import ToDoForm from "./components/newTaskForm.vue";
import { addTask } from "../services";
export default {
  components: {
    'app-header': header,
    'app-main': main,
    'app-form': ToDoForm

  },
  data() {
    return {
      todos: [
       // { id: 1, name: 'Kavya', task: 'Make a todo app' },
       // { id: 2, name: 'Ravi', task: 'Complete node tutorial' }
      ],
      isFormVisible: false
    }
  },
  methods: {
    updateTask(data) {
      console.log('data::', data);
      addTask(data).then(() => {
        this.todos.push(data);
        //console.log("Heree");
        //console.log(response);
        // this.displayTask();
      })
    }

  },

}



</script>

<style>
button {
  margin-top: 10px;

}
</style>
