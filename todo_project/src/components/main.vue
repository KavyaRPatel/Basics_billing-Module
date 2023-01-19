
<template>
  <div id="todos">
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
          <td> <button class="Delete" v-on:click="deleteTask">Delete</button> <button class="Edit">Edit</button></td>
        </tr>
      </tbody>
    </table>

  </div>


</template>

<script>

import { displayTask } from "../../services";

export default {
  props: {
    todos: {
      type: Array,
    }
  },


  data() {
    return {
      list:[]
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

<style scoped>
table {
  width: 80%;
  border-collapse: separate;

}

th,
td {
  padding: 10px;
  text-align: center;
  border-color: rgb(12, 12, 12);
  border-bottom: 1px solid rgb(12, 12, 12);

}

th {
  background-color: #ddc3ee;
  font-weight: bold;
  border-color: black;
}
.Delete{
  background-color: rgb(241, 114, 114);
  font-weight: bold;
  align-items: right;
  justify-content: center;
  widows:50%;
}
.Edit{
  background-color: rgb(108, 183, 245);
  font-weight: bold;
  align-items: center;
  justify-content: center;
  widows:50%;
}
</style>
