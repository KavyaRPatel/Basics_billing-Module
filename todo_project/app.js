var express = require("express");
var app = express();
const cors = require('cors');

const bodyparser = require("body-parser");

const pool = require("./db")
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:8081',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    next();
})
const todos = []

app.post('/', async (req, res) => {
    try {
        const name = req.body.task.name;
        const { task } = req.body.task;
        const new_todo = await pool.query("INSERT INTO todo (name, task) VALUES ($1,$2) RETURNING *", [name, task])
        res.json(new_todo)
        // res.json("Hellooo")
    } catch (err) {
        console.log(err.message);
    }
    res.json("task added")

    //const todo = req.body.todo;
    //todo.push(todo);
})

app.delete('/:id', async (req, res) => {
    console.log("here");
    try {
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1",
            [req.params.id]);

        res.json("Todo was deleted")
    } catch (error) {
        console.log(err.message);

    }
})



app.get('/', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo ORDER BY todo_id DESC")
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err.message);

    }

})

app.patch("/:id", async (req, res) => {
    try {
        const task = req.body.task.task;
        const updateTodo = await pool.query("UPDATE todo SET task = $1 WHERE todo_id=$2 ", [task, req.params.id])
        res.json("Todo was updated")
    } catch (err) {
        console.log(err.message);
    }
})


app.listen(4000, () => {
    console.log("Server is listening to http://localhost:4000");
})