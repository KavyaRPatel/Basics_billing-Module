<template>
  <div class>
    <router-view></router-view>  
  
     
  </div>

</template>

<script>
import main from './components/main.vue';
import base from './components/base.vue';

export default {
  components: {
    'app-main': main,
    'app-base': base
  },
  data(){
    
  }

}
</script>

<style>

</style>
