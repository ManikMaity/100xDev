# Express.js Documentation: Building a Simple Kidney Management Server

Welcome to the Express.js documentation! This guide will walk you through the fundamental concepts of Express.js by dissecting a sample application—a simple kidney management server. By the end of this documentation, you'll have a clear understanding of how to set up an Express server, handle different HTTP requests, manage data, and implement middleware.

## Table of Contents

1. [Introduction to Express.js](#introduction-to-expressjs)
2. [Setting Up the Server](#setting-up-the-server)
3. [Middleware in Express](#middleware-in-express)
4. [Routing in Express](#routing-in-express)
   - [GET Request](#get-request)
   - [POST Request](#post-request)
   - [PUT Request](#put-request)
   - [DELETE Request](#delete-request)
7. [Starting the Server](#starting-the-server)
8. [Complete Code Overview](#complete-code-overview)
9. [Conclusion](#conclusion)

---

## Introduction to Express.js

**Express.js** is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating server-side applications by offering a streamlined approach to handling HTTP requests, routing, middleware integration, and more.

In this documentation, we'll explore these features by examining a simple application that manages users and their kidneys' health status.

---

## Setting Up the Server

### Importing Express and Initializing the App

The first step in building an Express application is to import the Express module and create an instance of an Express application.

```javascript
const express = require("express");
const app = express();
```

- **`require("express")`**: Imports the Express module.
- **`express()`**: Initializes a new Express application and assigns it to the variable `app`.

---

## Middleware in Express

Middleware functions are functions that have access to the request (`req`) and response (`res`) objects, and the next middleware function in the application’s request-response cycle. They can execute code, make changes to the request/response objects, end the request-response cycle, or call the next middleware.

### Using JSON Middleware

```javascript
app.use(express.json());
```

- **`app.use()`**: Mounts the specified middleware function(s) at the specified path. In this case, it's mounting the JSON middleware globally.
- **`express.json()`**: Parses incoming requests with JSON payloads and is based on [body-parser](https://github.com/expressjs/body-parser). It makes the parsed data available under `req.body`.

**Purpose**: This middleware is essential for handling JSON data sent in the body of HTTP requests, especially for POST and PUT requests.

---

## Routing in Express

Routing refers to how an application’s endpoints (URIs) respond to client requests. Express provides a robust routing API that allows you to define routes for different HTTP methods and URL paths.

In our application, we have four primary routes corresponding to the CRUD operations:

1. **GET `/`**: Retrieve data.
2. **POST `/`**: Create new data.
3. **PUT `/`**: Update existing data.
4. **DELETE `/`**: Remove data.

### GET Request

```javascript
app.get("/", (req, res) => {
    const name = req.query.name;
    const userData = users.find(user => user.name == name);
    const totalNoKedneys = userData.kidney.length;
    const totalNoOfHealthyKidney = userData.kidney.filter(kidney => kidney.healthy).length;
    const totalNoOfUnhealthyKidney = totalNoKedneys - totalNoOfHealthyKidney;
    res.json({
        name,
        totalNoKedneys,
        totalNoOfHealthyKidney,
        totalNoOfUnhealthyKidney
    });
});
```

- **`app.get(path, callback)`**: Defines a route handler for GET requests to the specified path (`"/"` in this case).
- **`req.query`**: Accesses query parameters sent in the URL. For example, in `/`?name=manik`, `req.query.name` would be `"manik"`.
- **`res.json()`**: Sends a JSON response. It sets the `Content-Type` header to `application/json` and sends the JSON representation of the provided object.

**Functionality**: Retrieves a user's kidney data based on the provided name and returns statistics about their kidneys.

### POST Request

```javascript
app.post("/", function (req, res) {
    const username  = req.body.name;
    const isHealthy = req.body.isHealthy;
    users.forEach(user => {
        if (user.name == username){
            if(isHealthy){
                user.kidney.push({healthy : true});
            }
            else{
                user.kidney.push({healthy : false});
            }
        }
    });
    const userData = users.find(user => user.name == username);
    res.json(userData);
});
```

- **`app.post(path, callback)`**: Defines a route handler for POST requests to the specified path.
- **`req.body`**: Contains the parsed body of the request, made available by the `express.json()` middleware.
- **`Array.prototype.forEach`**: Iterates over the `users` array to find the matching user and add a new kidney entry based on the `isHealthy` flag.

**Functionality**: Adds a new kidney entry (healthy or unhealthy) to a specified user and returns the updated user data.

### PUT Request

```javascript
app.put("/", (req, res) => {
    const username = req.body.name;
    const alleastOneUnhealthyKidney = isAtleastOneUnhealthyKidney(username);
    if (alleastOneUnhealthyKidney){
        const userData = users.find(user => user.name == username);
        userData.kidney.forEach(kidney => {kidney.healthy = true});
        res.json({
            "message" : "All kidney is healthy now"
        });
    }
    else{
        res.status(411).json({
            "message" : "No unhealthy kidney found"
        });
    }
});
```

- **`app.put(path, callback)`**: Defines a route handler for PUT requests to the specified path.
- **`res.status(code)`**: Sets the HTTP status code for the response.
- **`isAtleastOneUnhealthyKidney(username)`**: A helper function that checks if the user has at least one unhealthy kidney.

**Functionality**: Updates all kidneys of a specified user to healthy if there's at least one unhealthy kidney. Returns a success message or an error message with status code `411` if no unhealthy kidneys are found.

### DELETE Request

```javascript
app.delete("/", (req, res) => {
    const username = req.body.name;
    const userData = users.find(user => user.name == username);
    if (isAtleastOneUnhealthyKidney(username)){
        const healthyKidney = userData.kidney.filter(kidney => kidney.healthy);
        userData.kidney = healthyKidney;
    
        res.json({
            "message" : "Deleted unhealthy kidney"
        });
    }
    else{
        res.status(411).json({
            "message" : "You dont have unhealthy kidney to delete"
        });
    }
});
```

- **`app.delete(path, callback)`**: Defines a route handler for DELETE requests to the specified path.
- **`Array.prototype.filter`**: Creates a new array with all kidneys that are healthy, effectively removing unhealthy ones.

**Functionality**: Deletes all unhealthy kidneys of a specified user and returns a success message or an error message with status code `411` if no unhealthy kidneys are present.

---


## Starting the Server

```javascript
app.listen(3100);
```

- **`app.listen(port)`**: Binds and listens for connections on the specified port (`3100` in this case).
- **Default Callback**: Since no callback is provided, the server starts listening, and any errors during startup will be thrown.

**Purpose**: Starts the Express server, making it ready to handle incoming HTTP requests on port `3100`.

---

## Complete Code Overview

Here's the complete code with annotations for clarity:

[Code for kidney server](./ExpressOffline/kidney.js)

**Enhancements Made**:
- **Error Handling**: Added checks to handle cases where the user is not found, returning a `404` status code.
- **Optimization**: Replaced the `for` loop with `Array.prototype.some` for better readability and performance.
- **Feedback**: Added a console log in `app.listen` to confirm the server is running.

---

## Conclusion

This documentation provided a detailed walkthrough of a simple Express.js application that manages users and their kidneys' health status. Here's a recap of what we've covered:

- **Setting Up**: Importing Express and initializing the app.
- **Middleware**: Using `express.json()` to parse JSON request bodies.
- **Routing**: Handling GET, POST, PUT, and DELETE requests to perform CRUD operations.


By understanding these core concepts, you're well-equipped to build more complex and feature-rich applications using Express.js. Happy coding!


## Leaned in Assignemt
The line `const filename = req.params.fileName;` is part of the route handler in your Express server. Here's a breakdown of what this line does:

### Explanation

- **`req.params`**: This is an object containing properties mapped to the named route "parameters". For example, if you have a route defined as `/files/:fileName`, `req.params` will be an object with a property `fileName` that contains the value of that parameter from the URL.

- **`fileName`**: This is a variable you are creating to store the value of the `fileName` parameter from the URL.

### Usage

In the route handler:

```javascript
app.get("/files/:fileName", (req, res) => {
    const filename = req.params.fileName;
    // ... rest of the code
});
```

- **`/files/:fileName`**: When a request is made to a URL like `/files/example.txt`, the `fileName` parameter will be set to `example.txt`.
- **`req.params.fileName`**: Accesses the value of `fileName` from the URL.
- **`const filename`**: Stores the `fileName` value (`example.txt` in this case) for use within the route handler.

### Example

If the client makes a request to:

```
GET /files/myfile.txt
```

- `req.params.fileName` will be `"myfile.txt"`.
- `filename` will be set to `"myfile.txt"`, which can then be used to locate and read the file from the server's file system.

[Assigment Code](./FileServer/index.js)