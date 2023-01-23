<template>
  <div>
    <app-header></app-header>
    <button class="btn btn-dark" v-on:click="isFormVisible = !isFormVisible">Add Task</button>
    <!-- <button class="btn btn-dark" v-on:click="flag = !flag">Edit</button> -->

    <app-form v-if="isFormVisible" v-on:addTask="updateTask($event)"></app-form>
    <app-main v-bind:todos="todos" v-on:del="deleteTask($event)"></app-main>
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
import { addTask, displayTask, updateTodo } from "../services";
export default {
  components: {
    'app-header': header,
    'app-main': main,
    'app-form': ToDoForm,

  },
  data() {
    return {
      todos: [
        
      ],
      isFormVisible: false,
      
    
      
    }
  },
  methods: {
    updateTask(data) {
      console.log('data::', data);
      addTask(data).then(() => {
        this.todos.push(data);

      })
    },
    deleteTask(id) {

      this.todos = this.todos.filter(item => item.todo_id !== id)

    },
    editTask(data) {
      console.log('data::', data);
      updateTodo(data).then(() => {
        this.todos.push(data);
      })

    }



  },
  created() {
    //this.displayTask();
    displayTask().then((response) => {

      this.list = response;

    })
  }


}


</script>

<style>
.btn-dark {
  margin-left: 10%;
  margin-top: 1%;
  width: 10%;

}
</style>
