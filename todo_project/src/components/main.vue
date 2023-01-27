
<template>

  <div>
    <router-view></router-view>

    <app-header></app-header>
    <button class="btn btn-dark" v-on:click="isFormVisible = !isFormVisible">Add Task</button>
    <app-form v-if="isFormVisible" v-on:addTask="updateTask($event)"></app-form>


    <div id="todos">
      <app-edit v-bind:editId="editId" v-if="editId" v-on:editTask="editTask($event)"></app-edit>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Task</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <td>{{ todo.todo_id }}</td>
            <td>{{ todo.name }}</td>
            <td>{{ todo.task }}</td>
            <td> <button class="btn btn-danger" v-on:click="del(todo.todo_id)">Delete</button>
              <button class="btn btn-primary" v-on:click="editId = todo.todo_id">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>


</template>

<script>
import editTaskForm from "./editTask.vue";
import header from './Header.vue';
import ToDoForm from "./newTaskForm.vue";



import { displayTask, deleteTask, updateTodo, addTask } from "../../services";
export default {
  components: {

    'app-edit': editTaskForm,
    'app-header': header,
    'app-form': ToDoForm,

  },


  data() {
    return {
      editId: '',
      todos: [],
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

    del(id) {
      deleteTask(id).then(() => {
        this.todos = this.todos.filter(item => item.todo_id !== id)

      })
      displayTask().then((response) => {

        this.list = response;

      })

      console.log(id);

    },
    editTask(data) {

      console.log('data::', data);
      updateTodo(data).then(() => {
      })
    },
  },

  created() {
    displayTask().then((response) => {

      this.todos = response;

    })
  }
}
</script>

<style scoped>
table {
  width: 80%;
  border-collapse: separate;
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}

th,
td {
  padding: 10px;
  text-align: center;
  border-color: rgb(125, 192, 231);
  border-bottom: 1px solid rgb(56, 132, 202);

}

th {
  background-color: #69a1eb;
  font-weight: bold;
  border-color: rgb(56, 132, 202);
}

button {
  margin-left: 10px;
}
</style>
