# MongoDB
- MongoDB is an open-source, document-oriented database. It is a NoSQL database that stores data in JSON-like documents. MongoDB is developed by MongoDB Inc. and is used for various use cases.
- MongoDB is a shemaless database.


## How to use MongoDB
- First install Mongoose library
- Mongoose need shema to store the data.
- Mongoose do this to autocomplete.

## Relationship in mongoDB
```js
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourse : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})
```