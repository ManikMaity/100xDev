const randomArr = [5, 1, 6, 2, 8, 4];

function twoSum(arr: number[], target: number): number[] | number {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return 0;
}

function fnReturnInConsole(fn: () => unknown): void {
  console.log(fn());
}

fnReturnInConsole(() => {
  return twoSum(randomArr, 10);
});

interface Address {
  city: string;
  state: string;
}

interface UserInterface {
  name: string;
  age: number;
  address?: Address;
  isMarried: boolean;
  isWorking: boolean;
  role: string;
}

interface Office {
  name: string;
  address?: Address;
}

let user: UserInterface = {
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

let user2: UserInterface = {
  name: "manik",
  age: 22,
  isMarried: false,
  isWorking: false,
  role: "developer",
};

function canVote(user: UserInterface): boolean {
  return user.age >= 18;
}

console.log(canVote(user));

interface People {
  name: string;
  age: number;
  greet: () => void;
}

const people1: People = {
  name: "manik",
  age: 22,
  greet: function () {
    console.log("hello " + this.name);
  },
};

class People2 implements People {
  name: string;
  age: number;
  code: number;
  constructor(name: string, age: number) {
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

interface Rectangle {
  width: number;
  height: number;
  area: () => void;
}

class Shape {
  area() {
    console.log("area");
  }
}

class Rectangle extends Shape implements Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}
const ranctangle = new Rectangle(10, 20);
ranctangle.area();

// Intersection
type Student = {
  name: string;
  age: number;
  CGPA: number;
};

type Teacher = {
  name: string;
  age: number;
  subject: string;
  experience: number;
};

type CollegeStrudent = Student | Teacher;

const collgeStrudent: CollegeStrudent = {
  name: "manik",
  age: 20,
  subject: "commerse",
  experience: 0,
  CGPA: 9.7,
};

interface AppUser {
  name: string;
  age: number;
}

interface Admin extends AppUser {
  role: string;
  permissions: string[];
}

const admin1: Admin = {
  name: "manik",
  age: 22,
  role: "admin",
  permissions: ["write"],
};

function greetUserOrAdmin(user: AppUser | Admin): void {
  console.log("hello " + user.name);
}

greetUserOrAdmin(admin1);

function getMaxValueOfArray(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMaxValueOfArray([1, 2, 30, 4, 5, 6, 7, 8, 9, 10]));

function filterIllielUser(users: AppUser[]): AppUser[] {
  const filteredUsers: AppUser[] = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      filteredUsers.push(users[i]);
    }
  }
  return filteredUsers;
}

const appUsers: AppUser[] = [
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