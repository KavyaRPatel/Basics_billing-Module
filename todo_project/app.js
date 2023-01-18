var express = require("express");
var app = express();
const bodyparser = require("body-parser");

const pool = require("./db")
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})
const todos = []
app.get('/', (req, res) => {
    res.json(todos)
})

app.post('/', (req, res) => {

    const todo = req.body.todos;
    todos.push(todo);
    res.json("task added")
})


app.listen(4000, () => {
    console.log("Server is listening to http://localhost:4000");
})