"use strict";
let x = 1;
console.log(x);
function greet(name) {
    console.log("Hello " + name);
}
greet("Manik");
greet("Suman");
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
function isAdult(age) {
    return age >= 18;
}
// here we dont have to give the type is the function return type will be the variable type.
const person1 = isAdult(10);
console.log(isAdult(21));
console.log(person1);
function runAfterOneSec(fn) {
    setTimeout(fn, 1000);
}
function hi() {
    console.log("Hi there");
}
runAfterOneSec(hi);
const greet2 = (name) => {
    return `Hi there, ${name}`;
};
console.log(greet2("manik"));
// Object typein Typescript
const sayHelloWithCode = (user) => {
    console.log("Hello " + user.name + " your code is " + user.code);
};
// Typescript auto infers the type we can hover over the variable and seee the type
const manik = {
    name: "manik",
    code: 169,
    isMarried: false,
    isWorking: false,
    role: "developer",
    address: {
        street: "street 1",
        city: "city 1",
        pin: 123,
    },
};
sayHelloWithCode({ name: "Suman", code: 123 });
const todo = [
    {
        content: "Go to college",
        isCompleted: true,
    },
    {
        content: "Go to office",
        isCompleted: false
    },
    {
        content: "Go to home",
        isCompleted: true
    }
];
function printAllTodo(todos) {
    todos.forEach(todo => {
        console.log(`${todo.content} is ${todo.isCompleted ? "completed" : "not completed"}`);
    });
}
printAllTodo(todo);
