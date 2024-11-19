import React from "react";
import {
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { todosFetchedAtomFamily } from "../store/atoms/todosAtom";

function Todo2({ id }) {
  const [todoValue, setTodoValue] = useRecoilStateLoadable(
    todosFetchedAtomFamily(id)
  );

  if (todoValue.state === "loading") {
    return <div>Loading...</div>;
  }
  if (todoValue.state === "hasError") {
    return <div>Error</div>;
  }
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        gap: "10px",
        padding: "10px",
      }}
    >
      <p>{todoValue.contents.todo}</p>
      <input
        type="checkbox"
        name=""
        value={todoValue.contents.completed}
        id=""
      />
      <p>User : {todoValue.contents.userId}</p>
    </div>
  );
}

export default Todo2;
