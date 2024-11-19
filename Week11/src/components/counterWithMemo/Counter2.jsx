import React, { memo, useEffect, useMemo, useState } from "react";
import CountView2 from "./CountView2";

function Counter2() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  const MemoizedCountView = memo(CountView2);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <MemoizedCountView />
    </div>
  );
}

export default Counter2;
