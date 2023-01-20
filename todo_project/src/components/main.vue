
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
          <td> <button class="btn btn-danger" v-on:click="del(todo.todo_id)">Delete</button> <button
              class="btn btn-primary" v-on:click="edit(todo.todo_id)">Edit</button>
          </td>
          <h4></h4>
        </tr>
      </tbody>
    </table>

  </div>


</template>

<script>

import { displayTask, deleteTask, updateTask } from "../../services";

export default {
  props: {
    todos: {
      type: Array,
    }
  },


  data() {
    return {
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
    edit(id) {
      updateTask(id).then(() => {
        this.$emit('edit', id)


      })

      displayTask().then((response) => {

        this.list = response;

      })

      console.log(id);

    }
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



</style>
