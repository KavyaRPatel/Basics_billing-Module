
const express = require ("express")
const app = express();
const PORT = 3000;

// app.get("/ping", (req,res)=>{
//     res.send("Node app")
// });

// app.listen(3000, ()=>{console.log("Server started on port 3000")})

//routing
// const data ={
//     id:1,
//     name:"India"
// }

// app.get('/', (req,res)=>{
//     res.end("Welcome to home page");
// })

// app.get('/about', (req,res)=>{
//     res.send("Welcome to about page");
// })

// app.get('/whether', (req,res)=>{
//     res.send("Whether is nice");
// })

// app.listen(PORT,()=> {
//     console.log("Server started on PORT:", PORT)
// })

//views
app.set('view engine','pug')
app.get('/', (req,res)=>{
    res.render('index')
}).listen(PORT, console.log("Server started on port http://localhost:3000"))