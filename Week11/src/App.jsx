import {} from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import ProductCard from "./components/ProductCard";
import usePrev from "./hooks/usePrev";

function App() {
  const { count, increaseCount } = useCounter();
  const prevCount = usePrev(count);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={increaseCount}>Increment</button>
      <div style={{ display: "flex", gap: "16px" }}>
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
