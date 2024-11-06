import React, { useEffect, useRef } from "react";

function usePrev(value) {
  const prev = useRef(null);
  console.log(`value: ${value}, first`); // console

  useEffect(() => {
    prev.current = value;
    console.log(`current: ${value}, second, useEffect`); // console
  }, [value]);

  console.log(`prev: ${prev.current} third`); // console
  return prev.current;
}

export default usePrev;
