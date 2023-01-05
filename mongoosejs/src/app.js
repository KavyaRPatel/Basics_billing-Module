const mongoose= require("mongoose");

// connection with database. if not present it will create one 

mongoose.connect("mongodb://localhost:27017/project1", {useNewUrlParser: true}, {useUnifiedTopology: true})
.then(() => console.log("Connection successfull."))
.catch((err) => console.log(err)); 

// Scheme defines structure of Document
const playlistSchema= new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    ctype : String,
    videos : Number,
    author : String, 
    active : Boolean,
    date : {
        type:Date,
        default: Date.now
    }
})
// Mongoose model provides an interface to database for creating queries, updating, deleting records. 
const Playlist= new mongoose.model("Playlist", playlistSchema);