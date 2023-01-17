new Vue({
    el:'#vue-app',
    data:{
        name: "Shaun",
        job: "Author"
    },
    methods:{
        greet: function(){
            return 'Good morning!'
        }
    }
});