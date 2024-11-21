"use strict";
const randomArr = [5, 1, 6, 2, 8, 4];
function twoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return 0;
}
function fnReturnInConsole(fn) {
    console.log(fn());
}
fnReturnInConsole(() => {
    return twoSum(randomArr, 10);
});
let user = {
    name: "manik",
    age: 22,
    address: {
        city: "kathmandu",
        state: "nepal",
    },
    isMarried: false,
    isWorking: false,
    role: "developer",
};
let user2 = {
    name: "manik",
    age: 22,
    isMarried: false,
    isWorking: false,
    role: "developer",
};
function canVote(user) {
    return user.age >= 18;
}
console.log(canVote(user));
const people1 = {
    name: "manik",
    age: 22,
    greet: function () {
        console.log("hello " + this.name);
    },
};
class People2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.code = Math.floor(Math.random() * 100);
    }
    greet() {
        console.log("hello " + this.name);
    }
}
new People2("manik", 22).greet();
people1.greet();
class Shape {
    area() {
        console.log("area");
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
const ranctangle = new Rectangle(10, 20);
ranctangle.area();
const collgeStrudent = {
    name: "manik",
    age: 20,
    subject: "commerse",
    experience: 0,
    CGPA: 9.7,
};
const admin1 = {
    name: "manik",
    age: 22,
    role: "admin",
    permissions: ["write"],
};
function greetUserOrAdmin(user) {
    console.log("hello " + user.name);
}
greetUserOrAdmin(admin1);
function getMaxValueOfArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxValueOfArray([1, 2, 30, 4, 5, 6, 7, 8, 9, 10]));
function filterIllielUser(users) {
    const filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            filteredUsers.push(users[i]);
        }
    }
    console.table(filteredUsers);
    return filteredUsers;
}
const appUsers = [
    {
        name: "manik",
        age: 22,
    },
    {
        name: "User 1",
        age: 19,
    },
    {
        name: "User 2",
        age: 17,
    },
    {
        name: "User 3",
        age: 20,
    },
];
console.log(filterIllielUser(appUsers));
