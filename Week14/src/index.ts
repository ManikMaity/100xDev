let x: number = 1;
console.log(x);

function greet(name: string): void {
  console.log("Hello " + name);
}

greet("Manik");
greet("Suman");

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(1, 2));

function isAdult(age: number): boolean {
  return age >= 18;
}

// here we dont have to give the type is the function return type will be the variable type.
const person1 = isAdult(10);
console.log(isAdult(21));
console.log(person1);

function runAfterOneSec(fn: () => void): void {
  setTimeout(fn, 1000);
}

function hi(): void {
  console.log("Hi there");
}

runAfterOneSec(hi);

const greet2 = (name: string): string => {
  return `Hi there, ${name}`;
};

console.log(greet2("manik"));

interface User {
  name: string;
  code: number;
}

type UserType = {
  name: string;
  code: number;
};

// Object typein Typescript
const sayHelloWithCode = (user: UserType): void => {
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

// funcion takes todos and console log them
type TodoType = {
  content: string;
  isCompleted: boolean;
}[];


const todo = [
  {
    content: "Go to college",
    isCompleted: true,
  },
  {
    content : "Go to office",
    isCompleted : false
  },
  {
    content : "Go to home",
    isCompleted : true
  }
];


function printAllTodo(todos : TodoType) : void {
  todos.forEach(todo => {
    console.log(`${todo.content} is ${todo.isCompleted ? "completed" : "not completed"}`);
  })
}

printAllTodo(todo);

type StringOrNum = string | number;

function addTwoValue (val1 : StringOrNum, val2 : StringOrNum) : StringOrNum {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return val1 + val2;
  }
  else {
    return val1.toString() + val2.toString();
  }
}

type Employee = {
  name : string;
  startDate : Date;
}

type Manager  = {
  name : string;
  age : number;
}

type TeamLeader = Manager&Employee;

const leader1:TeamLeader = {
  name : "manik",
  startDate : new Date(),
  age : 23
}