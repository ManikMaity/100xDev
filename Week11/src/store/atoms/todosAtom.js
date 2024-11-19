import { atom, atomFamily, selectorFamily } from "recoil";
import { TODOS } from "../../todos";
import axios from "axios";

const todosAtomFamily = atomFamily({
  key: "todos",
  default: (id) => TODOS.find((todo) => todo.id == id),
});

export const todosFetchedAtomFamily = atomFamily({
  key: "todosFetched",
  default: selectorFamily({
    key: "todosFetched",
    get:
     (id) =>
      async ({ get }) => {
        const todo = await axios.get(`https://dummyjson.com/todos/${id}`);
        return todo.data;
      },
  }),
});

export default todosAtomFamily;
