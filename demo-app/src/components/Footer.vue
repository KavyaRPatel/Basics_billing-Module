<template>
    <footer>
        <p>{{ copyright  }}</p>
    </footer>

</template>

<script>

export default{
  data(){
    return{
      copyright: "Copyright 2023"
    }
  }
}
</script>

<style scoped>
footer{
    background-color: blue;
    padding: 2px;
}
p{
    color: lightblue;
    text-align: center;
}
</style>