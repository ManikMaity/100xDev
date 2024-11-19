import {} from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import ProductCard from "./components/ProductCard";
import usePrev from "./hooks/usePrev";
import TypeBox from "./components/TypeBox";
import Counter from "./components/Counter";
import { RecoilRoot } from "recoil";
import Counter2 from "./components/counterWithMemo/Counter2";
import TodosContainer from "./components/TodosContainer";
import Todos2Container from "./components/Todos2Container";
import Todo2 from "./components/Todo2";

function App() {
  const { count, increaseCount } = useCounter();
  const prevCount = usePrev(count);

  return (
    <RecoilRoot>
      <p>Hi</p>
      {/* <TodosContainer /> */}
      <Todos2Container/>
    </RecoilRoot>
  );
}

export default App;
