<template>
  <header>
    <h1>{{ title }}</h1>
   <!-- <h2>{{ isFormVisible }}</h2> -->
  </header>

</template>

<script>


export default {
  data() {
    return {
      title: "Todo List",
      
    }
  },
  methods: {
 }
}
</script>

<style scoped>
header {
  background-color: rgba(174, 129, 233, 0.747);
  padding: 10px;
}

button {
  background-color: white;
  border-radius: 10%;
  align-items: flex-end;
  color: #000;

}

h1 {
  color: rgb(0, 0, 0);
  text-align: center;
}
</style>
