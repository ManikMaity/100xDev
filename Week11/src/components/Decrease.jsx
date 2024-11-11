import React from "react";
import { useSetRecoilState } from "recoil";
import counterAtom from "../store/atoms/counter";

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button onClick={() => setCount((prevCount) => prevCount - 1)}>
      Decrease
    </button>
  );
}

export default Decrease;
