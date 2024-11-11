import React from "react";
import { useSetRecoilState } from "recoil";
import counterAtom from "../store/atoms/counter";

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Increase
    </button>
  );
}

export default Increase;
