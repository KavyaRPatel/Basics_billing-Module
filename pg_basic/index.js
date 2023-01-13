const express = require("express");
const app = express();
const pool = require("./db")

app.use(express.json())

app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err.message);

    }
})

app.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0])

    } catch (err) { console.log(err.message); }
})

app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const {description}=req.body; 
    try {
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id=$2 ", [description,id])
        res.json("Todo was updated")
    } catch (err) {
        console.log(err.message);
    }
})
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const new_todo = await pool.query("INSERT INTO todo(description) VALUES ($1) RETURNING *", [description])
        res.json(new_todo)
    } catch (err) {
        console.log(err.message);
    }
})

app.delete('/todos/:id', async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteTodo= await pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
        res.json("Todo was deleted")
    } catch (error) {console.log(err.message);
        
    }
})

app.listen(3000, () => {
    console.log("Server is listening to http://localhost:3000");
}) 