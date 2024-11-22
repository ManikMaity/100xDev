console.log("There is manik maity");

// Recap
export interface User {
  name: string;
  age: number;
}

const sumOfAge = (arr: User[]): number => {
  const sum = arr.reduce((acc, currentUser) => acc + currentUser.age, 0);
  return sum;
};

const usersArr: User[] = [
  { name: "manik", age: 19 },
  { name: "suman", age: 17 },
  { name: "malati", age: 32 },
];

console.log(sumOfAge(usersArr));


// Pick
// If we want to make a type from another type then we can use Pick
// This way when any type change in main type it will chnage in Pick type
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

// Partial
// It will make the properties optional

type updateUserOptional = Partial<DBUpdate>

function updateUserOptional (updatedValues : updateUserOptional){
}


// Readonly

// making a single readonly
type FamilyMembers = {
    name : string,
    age : number,
    readonly relation : string,
    address : string
}

// make the whole readonly
const swapan : Readonly<FamilyMembers> = {
    name : "Swapan",
    age : 40,
    relation : "father",
    address : "Kolkata"
}

const familyNames : Readonly<string[]> = ["manik", "suman", "malati"];
console.log(familyNames);

type keyValueType = {
  name : string,
  age : number
}

// type UserKeyValuePairType = {
//   [key : string] : keyValueType
// }


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

// Excludes

type EventType = "click" | "scroll" | "mousemove";
type ExludeClick = Exclude<EventType, "click">;

function logEvent(event : ExludeClick){
  console.log(`Event : ${event}`)
}

logEvent("scroll");