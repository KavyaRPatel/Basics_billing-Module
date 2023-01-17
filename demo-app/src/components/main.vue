<template>
    <div id="details">
        <ul>
            <li v-for="detail in details" :key="detail.name" v-on:click="detail.show = !detail.show">
                <h2>{{ detail.name }}</h2>
                <h3 v-show="detail.show">{{ detail.speciality }}</h3>
            </li>
        </ul>
        <!-- <button v-on:click="deleteDetail">Delete</button>  -->
    </div>
</template>

<script>

export default {
    props: {
        details:{
            type: Array,
            required: true
        }    },

    data() {
        return {

        }
    }
  //  methods: {}

}

</script>

<style scoped>
#details {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid black;
    margin: 10px;
}
</style>