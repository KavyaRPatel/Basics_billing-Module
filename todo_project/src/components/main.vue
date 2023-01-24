
<template>
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
        <tr v-for="todo in list" :key="todo.id">
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


</template>

<script>
import editTaskForm from "./editTask.vue";

import { displayTask, deleteTask, updateTodo } from "../../services";
export default {
  components: {

    'app-edit': editTaskForm,

  },
  props: {
    todos: {
      type: Array,
    }
  },


  data() {
    return {
      editId: '',
      list: [],
    }

  },
  methods: {

    del(id) {
      deleteTask(id).then(() => {
        this.$emit('del', id)

      })
      displayTask().then((response) => {

        this.list = response;

      })

      console.log(id);

    },
    editTask(data) {

      console.log('data::', data);
      updateTodo(data).then(() => {
        //this.todos.push(data);

      })
    },
  },

  created() {
    displayTask().then((response) => {

      this.list = response;

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
