# TypeScript 

## Index 
- [TypeScript Class 1](#typescript-class-1)
- [Strongly Typed Languages vs Loose Typed Languages](#strongly-typed-languages-vs-loose-typed-languages)
- [TypeScript](#typescript)
- [Process of creating typescript project](#process-of-creating-typescript-project)
- [Type Inference](#type-inference)
- [Any Type](#any-type)
- [Callback fn type](#callback-fn-type)
- [TS Config](#ts-config)
- [Type Alias](#type-alias)
- [Interface](#interface)
- [Class using interface - Inplementing interface](#class-using-interface-inplementing-interface)
- [Difference between interface and type](#difference-between-interface-and-type)
- [Pick](#pick)
- [Partial](#partial)
- [Readonly](#readonly)
- [Record and Map](#record-and-map)
- [Infer Type in zod](#infer-type-in-zod)


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
```

## Typescript Class  2

### Interface
- Interfaces are used to define the structure of an object.
```ts
interface UserInterface {
    name: string;
    age: number;
    address?: {
        city: string;
        state: string;
    };
    isMarried: boolean;
    isWorking: boolean;
    role: string;
}

let user: UserInterface = {
    name : "manik",
    age : 22,
    address : {
        city : "kathmandu",
        state : "nepal"
    },
    isMarried : false,
    isWorking : false,
    role : "developer"
}
````
- We can make any property `optional` using `?`
- optional property helps in partial type
```ts
address?: {
        city: string;
        state: string;
    };
```
- Now this will also work without address.
```ts
let user2: UserInterface = {
    name : "manik",
    age : 22,
    isMarried : false,
    isWorking : false,
    role : "developer"
}
```
- We can use interface inside another interface.
```ts
interface Address {
    city: string;
    state: string;
};

interface UserInterface {
    name: string;
    age: number;
    address?: Address;
    isMarried: boolean;
    isWorking: boolean;
    role: string;
}
```

### Class using interface - Inplementing interface
- Interface and implements classses but typs cant.
```ts
class People2 implements People {
    name : string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
        this.code = Math.floor(Math.random() * 100);
    }
    greet() {
        console.log("hello " + this.name);
    }
}
```

### Diff between interface and type
- In type we can make union and intersection type.
- In interface we can cant.


#### Intersection and Unions (| and &)
- Intersection is a combination of two or more types with `&`.
```ts
type CollegeStrudent = Student & Teacher;
```
- Union is a combination of two or more types with `|`.
```ts
type CollegeStrudent = Student | Teacher;
```

#### Array Types
- To make array type we use `[]`.
```ts
type StringArray = string[];
type NumberArray = number[];
type MixedArray = (string | number)[];
```
- Why union is called intersection in typeScript?
- [Ans](https://www.reddit.com/r/typescript/comments/1e61bla/demystifying_intersection_and_union_types_in/)

### Pick
- Pick is used to select a subset of properties from a type.
- `Pick` let us to pick value from another type.
- If we want to make a type from another type then we can use Pick
- This way when any type change in main type it will chnage in Pick type

```ts
interface DBUser {
    _id : string;
    username : string;
    email : string;
    password : string;
    name : string;
}

type DBUpdate= Pick<DBUser, "name" | "email"| "password">


function updateUser (updatedValues : DBUpdate){
    console.log("User is updated")
}
```
### Partial(?)
- It will make the properties of the type optional
```ts
type updateUserOptional = Partial<DBUpdate>;
// same as
type updateUserOptional = {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}
```

### Readonly
- It will make the properties of the type readonly.
- In js or ts we can change the value inside the object or array even with const.
```ts
// this will not throw error
const familyNames = ["manik", "suman", "malati"];
familyNames[0] = "Swapan";
```
- To make the the object or array readonly we use `Readonly` so noone can change the value.
#### readonly
- `readonly` is used to make a property readonly.
```ts
type FamilyMembers = {
    name : string,
    age : number,
    readonly relation : string,
    address : string
}
```
#### Readonly
- `Readonly` is used to make a whole object readonly.
```ts
const swapan : Readonly<FamilyMembers> = {
    name : "Swapan",
    age : 40,
    relation : "father",
    address : "Kolkata"
}
```

### Record and Map
- Record is used to create a type that maps keys to values pair in objects.
```ts
type UserKeyValuePairType = Record<string, keyValueType>;

const userKeyValuePair : UserKeyValuePairType = {
  "user@125" : {
    name : "manik",
    age : 22
  },
  "user@126" : {
    name : "suman",
    age : 22
  }
}
```

### Infer Type in zod
- Infer type is used to infer the type of a variable from the zod schema we created for it.
```ts
const stringValue = z.object({
  name: z.string(),
});

type StringValue = z.infer<typeof stringValue>;

const userBody : UserBodyType = req.body;
  const sucess = userSchema.safeParse(userBody);
  if (!sucess) {
    res.status(400).json({
      sucess: false,
    });
  }
  res.status(200).json({
    sucess: true,
  });
});
```