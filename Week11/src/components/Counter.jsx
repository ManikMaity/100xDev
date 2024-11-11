import React, { useState } from "react";
import Increase from "./Increase";
import Decrease from "./Decrease";
import CountView from "./CountView";

function Counter() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <CountView />
      <Increase />
      <Decrease />
    </div>
  );
}

export default Counter;
