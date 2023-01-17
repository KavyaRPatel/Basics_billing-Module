<template>
  <app-header v-bind:title="title"></app-header>
  <app-main v-bind:todo="todos"></app-main>

</template>

<script>
import header from './components/Header.vue';
import main from './components/main.vue';

export default {
  components: {
    'app-header': header,
    'app-main': main

  },
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

<style>

</style>
