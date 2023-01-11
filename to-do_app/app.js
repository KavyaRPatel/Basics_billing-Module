var express=require("express")
var app= express();
var todoControllers=require('./controllers/todo-controllers')
app.set('view engine', 'ejs');

app.use(express.static('./public'))

todoControllers();

app.listen(3000,()=>{
    console.log("You are listening to Port 3000")
});