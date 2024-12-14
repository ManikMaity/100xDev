import { createTodo, createUser, getAllUser, getUserData, updateUser } from "./repository";

console.log("Hello World from server.ts");

(async () => {

    const userData = await getUserData(2);
    console.log(userData);

    const allUsers = await getAllUser();
    console.table(allUsers);
})();