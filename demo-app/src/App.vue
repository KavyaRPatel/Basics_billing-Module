<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-main v-bind:details="details"></app-main>
    <app-footer  v-bind:title="title"></app-footer>
  </div>

</template>

<script>
import header from './components/Header.vue';
import footer from './components/Footer.vue';
import main from './components/main.vue';



export default {
  components: {
    'app-header': header,
    'app-footer': footer,
    'app-main': main

  },

  data() {
    return {
      details: [
        { name: "Parth", speciality: "Java", show: false },
        { name: "Hiral", speciality: "Node", show: false },
        { name: "Pratik", speciality: "Django", show: false },
        { name: "Raavi", speciality: "VueJs", show: false },
        { name: "Rohan", speciality: "MongoDB   ", show: false },

      ],
      title: "Vue Js"    }
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    }}
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>