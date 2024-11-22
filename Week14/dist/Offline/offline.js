"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("There is manik maity");
const sumOfAge = (arr) => {
    const sum = arr.reduce((acc, currentUser) => acc + currentUser.age, 0);
    return sum;
};
const usersArr = [
    { name: "manik", age: 19 },
    { name: "suman", age: 17 },
    { name: "malati", age: 32 },
];
console.log(sumOfAge(usersArr));
function updateUser(updatedValues) {
    console.log("User is updated");
}
function updateUserOptional(updatedValues) {
}
// make the whole readonly
const swapan = {
    name: "Swapan",
    age: 40,
    relation: "father",
    address: "Kolkata"
};
const familyNames = ["manik", "suman", "malati"];
console.log(familyNames);
const userKeyValuePair = {
    "user@125": {
        name: "manik",
        age: 22
    },
    "user@126": {
        name: "suman",
        age: 22
    }
};
function logEvent(event) {
    console.log(`Event : ${event}`);
}
logEvent("scroll");
