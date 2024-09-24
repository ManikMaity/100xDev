# Databases 

## Index
- Databases
- NoSql Databases
- Mongodb
- Mongose
- CRUD Operations using mongose

## Databases
- Databses are static irespect of the backend language or framework like java , python, nodejs etc.
- Backend server shuld be stateless they should not store any data in it.
- So we can expend or reuse it.
- We will store data in databases.

Frondend ---> Backend ---> Database

## Mongodb
- Mongodb is a NoSql database.
- NoSql databases store data in key-value pairs.
- In nested data structure no-sql databases is used. UserData Obj --> Video -> All video -> video page and video description
- Schema means structure of data.


- Create a mongodb instance
- connect to the moongo db instance using mongodb compass.
- After that create a database by clicking on thr plus icon of clustur name and then create a collection.
- After creating the database we can create multiple collections by clicking on plus icon of the  database.
- We can manualy incert data in the collection by add data -> insert document -> id is auto created.
- We will write something like this:
```json
{
  "_id": {
    "$oid": "66ec6be219abb8e5aa830203"
  },
  "username": "manik123",
  "password": "123",
  "name": "Manik Maity"
}
```

## db.js
```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


mongoose.connect('mongodb+srv://manikmaityhaker2003:w0K2cWAQAnjTreKl@cluster0.bajhd.mongodb.net/todo-app-database');


const User = {
    username : String,
    password : String,
    salt : String,
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
```

## index.js

```js
const { UserModel, TodoModel } = require("./db");
// To create user

 await UserModel.create({
      username,
      password : bcrypt.hashSync(password, salt),
      salt,
      name
    });

// Find user
  const user = await UserModel.findOne({
    username,
    password,
  });

```