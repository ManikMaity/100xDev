import React, { useRef } from "react";

function Signin() {
  const inputRef = useRef();

  return (
    <div>
      <input type="text" ref={inputRef} name="" placeholder="Email" id="" />
      <input type="text" name="" placeholder="Password" id="" />
      <button onClick={() => inputRef.current.focus()}>Sign in</button>
    </div>
  );
}

export default Signin;
