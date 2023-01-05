const mongoose = require("mongoose");

// connection with database. if not present it will create one 

mongoose.connect("mongodb://localhost:27017/project1", { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => console.log("Connection successfull."))
    .catch((err) => console.log(err));

// Scheme defines structure of Document
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})
// Mongoose model provides an interface to database for creating queries, updating, deleting records. 
const Playlist = new mongoose.model("Playlist", playlistSchema)

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React JS",
            ctype: "Frontend",
            videos: 45,
            author: "Tech",
            active: true

        })

        const nodePlaylist = new Playlist({
            name: "Node JS",
            ctype: "Backend",
            videos: 40,
            author: "Tech",
            active: true

        })

        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "Database",
            videos: 60,
            author: "Tech",
            active: true

        })

        const JavascriptPlaylist = new Playlist({
            name: "Javascript",
            ctype: "Frontend",
            videos: 100,
            author: "Tech",
            active: true

        })

        const expressPlaylist = new Playlist({
            name: "Express",
            ctype: "Backend",
            videos: 20,
            author: "Tech",
            active: true

        })


        const result = await Playlist.insertMany([JavascriptPlaylist, expressPlaylist, mongoPlaylist]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
// createDocument();

// const getDocument = async () => {
//     try {
//         //const result = await Playlist.find({ ctype :{$in :["Backend", "Database"]}}).select({_id: 0, name:1})
//         //const result = await Playlist.find({ $or :[{ctype :"Backend"},{author: "Tech"}]})
//         //const result = await Playlist.find({ $or: [{ ctype: "Backend" }, { author: "Tech" }] })
//             .select({ name: 1 })
//             //.count()
//             .sort("name : 1");
//         console.log(result);
//     }
//     catch (err) { console.log(err); }
// }
// getDocument();


// const updateDocument = async (_id) => {
//     try {
//         const result = await Playlist.updateOne({ _id }, {
//             $set: {
//                 name: "node js"
//             }
           
//         });
//         console.log(result); 
//     } catch (err) { console.log(err); }

// }
// updateDocument("63b69594405df8292c2c4a3b")

const deleteDocument = async(_id) => {
    try{
        const result= await Playlist.findByIdAndDelete({_id}); 
        console.log(result);

    }
    catch(err){
        console.log(err); 
    }
}
deleteDocument("63b69594405df8292c2c4a3b");