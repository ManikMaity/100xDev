const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

async function connect(){
    await mongoose.connect('mongodb+srv://manikmaityhaker2003:w0K2cWAQAnjTreKl@cluster0.bajhd.mongodb.net/todo-app-database');
    console.log("Database connected");
}

connect();


const User = new Schema({
    username : String,
    password : String,
    salt : String,
    name : String
})

const User2 = new Schema({
    email : String,
    password : String
})

const Todo = new Schema ({
    des : String,
    done : Boolean,
    userId : ObjectId
})

const UserModel = mongoose.model("users", User);
const User2Model = mongoose.model("second-users", User2)
const TodoModel = mongoose.model("todos", Todo);

module.exports = {UserModel : User2Model, TodoModel, connect};