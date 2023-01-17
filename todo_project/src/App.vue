<template>
  <app-header v-bind:title="title"></app-header>

</template>

<script>
import header from './components/Header.vue';
export default {
  components: {
    'appHeader': header 
  },
  data() {
    return {
        todos: [
            { id: 1, name: 'Kavya', task: 'Make a todo app' },
            { id: 2, name: 'Ravi', task: 'Comlete node tutorial' }
        ]
    }
}


}
</script>

<style>

</style>
