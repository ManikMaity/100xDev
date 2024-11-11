import {} from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import ProductCard from "./components/ProductCard";
import usePrev from "./hooks/usePrev";
import TypeBox from "./components/TypeBox";
import Counter from "./components/Counter";
import { RecoilRoot } from "recoil";

function App() {
  const { count, increaseCount } = useCounter();
  const prevCount = usePrev(count);

  return (
    <RecoilRoot>
    <div>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={increaseCount}>Increment</button>
      <TypeBox/>
      <div style={{ display: "flex", gap: "16px" }}>
        <ProductCard />
      </div>
      <Counter/>
    </div>
    </RecoilRoot>
  );
}

export default App;
