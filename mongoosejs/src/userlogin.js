const mongoose = require("mongoose");
const validator = require("validator");

// connection with database. if not present it will create one 
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/user_login_app", { useNewUrlParser: true }, { useUnifiedTopology: true }, { useCreateIndex: true })
    .then(() => console.log("Connection successfull."))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //unique: true,
        //lowercase: true,
        //minlength: [2, "Minimum length is 2"]
    },

    number: Number,

    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email invalid");

            }
        }
    },
    password: String,
})
// Mongoose model provides an interface to database for creating queries, updating, deleting records. 
const User = new mongoose.model("User", userSchema)

const createDocument = async () => {
    try {
        const user1 = new User({
            name: "Pratik",
            number: 35123984,
            email: "pratik@gmail.com",
            password: "pra123"
        })

        const result = await User.insertMany(user1);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();