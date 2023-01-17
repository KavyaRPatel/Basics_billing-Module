<template>
  <footer>
    <p>Copyright 2023 {{ title_}}</p>
  </footer>

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
     title_:""
    }
  },
  created(){
    bus.$on('titleChanged',(data)=>{
      this.newTitle = data;
      title_ = this.newTitle;
    })
  }
}
</script>

<style scoped>
footer {
  background-color: blue;
  padding: 2px;
}

p {
  color: lightblue;
  text-align: center;
}
</style>