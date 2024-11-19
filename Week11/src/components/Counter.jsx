import React, { useState } from "react";
import Increase from "./Increase";
import Decrease from "./Decrease";
import CountView from "./CountView";
import IsEven from "./IsEven";

function Counter() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <CountView />
      <IsEven/>
      <Increase />
      <Decrease />
    </div>
  );
}

export default Counter;
