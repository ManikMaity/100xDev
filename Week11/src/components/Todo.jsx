import React from "react";
import { TODOS } from "../todos";
import todosAtomFamily from "../store/atoms/todosAtom";
import { useRecoilValue } from "recoil";

function Todo({ id }) {
    
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      {currentTodo?.title || "No title"}
      {currentTodo?.description || "No description"}
    </div>
  );
}

export default Todo;
