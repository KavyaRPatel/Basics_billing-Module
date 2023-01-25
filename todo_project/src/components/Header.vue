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
  margin-top: 1%;
  background-color: rgba(130, 175, 235, 0.747);
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;

}


h1 {
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgb(7, 7, 7);  
  text-align: center;
}
</style>
