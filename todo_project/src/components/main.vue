<template>
  <div id="todos">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.task }}</td>
        </tr>
      </tbody>
    </table>
    
</div>


</template>

<script>


export default {
  data() {
    return {
      todos: [
        { id: 1, name: 'Kavya', task: 'Make a todo app' },
        { id: 2, name: 'Ravi', task: 'Complete node tutorial' }
      ]
    }
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
  border-bottom: 1px solid #ddd;

}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
