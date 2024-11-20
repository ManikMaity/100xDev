# TypeScript 

## TypeScript Class  1

## Strongly Typed Languages vs Loose Typed Languages
- Strongly Typed Languages - Typescript, Java, C#
- Loose Typed Languages - JavaScript, Python, PHP
- Compiled Languages - C, Java -> we write code in Java and compile it to mechine code  
- Compliled languages are faster and while compiling check for compilation errors but not check for runtime errors
- Compiled Languages are more secure and safe.
- Loose Typed languages are faster and while running check for runtime errors and check for compilation errors
- It does not have compilation steps.

## TypeScript 
- TypeScript is a superset of JavaScript
- So any JavaScript code can be written in TypeScript and is also valid JavaScript
- But any TypeScript code may not be valid JavaScript.
- Typescript code never run it is compiled to JavaScript and javaScript code is run on browser.

## Process of creating typescript project
- Create a node project
```bash
npm init -y
```
- Create a typescript config file
```bash
 npx tsc --init
```
- Now we can start writing typescript code
```bash
code index.ts
```
- Compile the typescript code
- This will create javascript file
```bash
 tsc -b
````
- Now we can run the javascript file
```bash
node index.js
```


### Type Inference
- Typescript uses type inference to infer the type of variables and functions even if we do not specify the type.
```ts
let a = 10;
let b = "hello";
let c = true;
```

### Any Type
- Any type is a type that allows any value to be assigned to it.
```ts
let a: any = 10;
```

### Callback fn type
- In the place of void we can use callback fn return type
```ts
function runAfterOneSec(fn: () => void): void {
  setTimeout(fn, 1000);
}
```

### TS Config 
#### Target
- This is the target version of the TypeScript compiler. If we want our code to run on older versions of TypeScript, we can change the target property and it will compile the code as older js code.
```json
    "target": "es2016",
```

#### Source and distribution directory
- Inside the src folder we can write our typescript code and inside the dist folder we can get our compiled code.
```json
    "rootDir": "./src",
    "outDir": "./dist",
```

### Object type

#### By giving type to object
```ts
const sayHelloWithCode = (user : {name : string, code : number}) : void => {
  console.log("Hello " + user.name + " your code is " + user.code);
}
```
#### By using interface or type
```ts
interface User {
  name : string,
  code : number
}

type UserType = {
  name : string,
  code : number
}
```
#### Diff between interface and type

**Type**
- In type we can make union type.
```ts
type StringOrNum = string | number;
```
- types help in intersection type.
```ts
type Employee = {
  name : string;
  startDate : Date;
}

type Manager  = {
  name : string;
  age : number;
}
// Creating a intersection type
type TeamLeader = Manager&Employee;

const leader1:TeamLeader = {
  name : "manik",
  startDate : new Date(),
  age : 23
}