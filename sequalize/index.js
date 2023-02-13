const express= require('express');
const app= express();
const bodyParser= require('body-parser');    
const User = require('./modals/user')      
require('./modals/index')
app.use(bodyParser.json());
app.use

app.get('/', function(req, res) {
    res.send('Helloooo');
})

User.sync();

app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000');
})