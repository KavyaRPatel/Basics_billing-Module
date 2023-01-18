var express=require("express");
var app= express();
const pool = require("./db")


app.use(express.json())
app.get('/', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err.message);

    }
})

app.post('/', async (req, res) => {
    try {
        const { description } = req.body;
        const new_todo = await pool.query("INSERT INTO todo(description) VALUES ($1) RETURNING *", [description])
        res.json(new_todo)
    } catch (err) {
        console.log(err.message);
    }
})


app.listen(3000, () => {
    console.log("Server is listening to http://localhost:3000");
})