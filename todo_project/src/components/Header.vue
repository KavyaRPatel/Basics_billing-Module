<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>


export default {
  data() {
    return{
      title: "Todo List"

    }
  }
}
</script>

<style scoped>
header {
  background-color: lightblue;
  padding: 10px;
}

h1 {
  color: peru;
  text-align: center;
}
</style>
