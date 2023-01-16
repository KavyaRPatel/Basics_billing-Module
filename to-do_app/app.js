var express=require("express");
var app= express();

var todoControllers=require('./controllers/todo-controllers')
app.set('view engine', 'ejs');

app.use('/assets',express.static('./public'))
app.use('/assets/todo-list.js',express.static('./public'))

todoControllers(app);

app.listen(3000,()=>{
    console.log("You are listening to Port: http://localhost:3000")
});