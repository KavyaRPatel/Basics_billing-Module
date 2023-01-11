const express=require("express");
const fs= require("fs")
const path= require("path");

const app= express();
const port=process.env.PORT || 3000;

app.use(function(req,res,next){
    console.log("Request date:" +new Date());
  
    next();
})

app.use(function(req,res,next){
    var filePath=path.join(__dirname,"static",req.url);
    fs.stat(filePath,function(err,fileinfo){
        if(err){
            next();
            return
        }
        if(fileinfo.isFile){
            res.sendFile(filePath)
        }else{
            next()
        }
    })
});

app.use(function(req,res){
    res.status(404)
    res.send("File Not Found")
})
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})