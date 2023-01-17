<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title1 }}</h1>
  </header>

</template>

<script>
import {bus} from "../main";

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      newTitle: this.title,
      title1:""
    }
  },
  methods: {
    changeTitle :function() {
      //console.log(this.newTitle)
      //this.$emit('changeTitle',"Hello there mate!")
      this.newTitle="Hello there People";
      bus.$emit('titleChanged','Hello there People');
    }}
}
</script>

<style scoped>
header {
  background-color: lightblue;
  padding: 10px;
}

h1 {
  color: blue;
  text-align: center;
}
</style>