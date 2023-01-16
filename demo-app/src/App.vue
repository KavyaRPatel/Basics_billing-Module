<template>
  <div>
    <app-header></app-header>
    <app-main v-bind:details="details"></app-main>
    <app-footer></app-footer>
  </div>

</template>

<script>
import header from './components/Header.vue';
import footer from './components/Footer.vue';
import main from './components/main.vue';



export default{
  components:{
    'app-header':header,
    'app-footer':footer,
    'app-main':main

  },

  data(){
    return{
      
    }
  }
}
</script>

<style>
</style>