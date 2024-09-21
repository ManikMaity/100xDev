const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = {
    username : String,
    password : String,
    name : String
}

const Todo = {
    des : String,
    done : Boolean,
    userId : ObjectId
}

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {UserModel, TodoModel};