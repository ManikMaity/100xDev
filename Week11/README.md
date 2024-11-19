# Week 11

## Custom hooks

- Custom hooks are hooks made by us.
- Custom hooks is just a function but not normal fuction and it should be start with `use` keyword. Like - `useCounter`, `useCounterValue`
- Custom hooks use another hooks inside it.
- We can use custom hooks in our component.
- custom hooks is reusable in different components.
- And for each component, we can have different state from custom hook.

```js
// useCounter.js
import React, { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return { count, increaseCount };
}

export default useCounter;
```

```jsx
// App.jsx
const { count, increaseCount } = useCounter();
```

### Create useFetch hook

```js
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  async function getData() {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    setLoading(true);
    getData()
      .then((result) => {
        console.log(result);
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
        setIsError(true);
      });
  }, [url]);

  return { data, loading, error, isError };
}

export default useFetch;
```

### useFech with refetch function

```js
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  async function getData() {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    setLoading(true);
    getData()
      .then((result) => {
        console.log(result);
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
        setIsError(true);
      });
  }, [url]);

  useEffect(() => {
    const interval = setInterval(getData, 5000);

    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, isError };
}

export default useFetch;
```

### usePrev

- this hook return previous value of state variable.
- **NOTE-** in react the return happen first and then the state variable.
- So, first return value and then state variable value will change using useEffect.

```js
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
```

```bash
value: 2, first
usePrev.js:12 prev: 1 third
usePrev.js:9 current: 2, second, useEffect
```

### useDebounce - Done

## Recoil - Class 2

- Recoil is a state management library for React.
- Its hepls to manage global state in our application.4
- If we use state and pass the value to the child components even if the parent dont use the state it will rerender and everything will re-render. Which is a unoptimal thing.
- Even if we use context api this render will happen.
- So, we use Recoil to manage global state.

### Atoms

- Atoms are the basic unit of state management in Recoil. Similer to useState in react.
- When atom's state change it will rerender the child components.

### Process

- Install recoil

```bash
npm install recoil
```

- Wrap our app with RecoilRoot.

```jsx
<RecoilRoot>
  <App />
</RecoilRoot>
```

- Create atoms and export them.

```js
// src/store/atoms/counterAtom.js
import { atom } from "recoil";

export const counterAtom = atom({
  key: "counter", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});

export default counterAtom;
```

- Import atoms and use them.

- Subscribe to atom value.
```jsx
import { useRecoilValue } from "recoil";
import counterAtom from "../store/atoms/counter";

function CountView() {
  const count = useRecoilValue(counterAtom);

  return (
    <input
      type="text"
      value={count}
      readOnly
    />
  );
}

export default CountView;
```
- Update atom value using `useSetRecoilState` 
```jsx
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
```
- Now when we update the value of atom it will not rerender the child or parents of components will not using the value.

### Memo API in React
- When ever a component rerender it will rerender the child components even if the childs dont use the state.
```jsx
import React, { useEffect, useState } from "react";
import CountView2 from "./CountView2";

function Counter2() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
      <CountView2/>
  );
}
export default Counter2;
```
- In the above example the child component will rerender even if the parent component dont pass the  to child.
- So we have to memoize the child component.
```jsx
const MemoizedCountView = memo(CountView2);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <MemoizedCountView />
    </div>
  );
```
- Now the only the parent component will rerender if the parent component state change.

### Sectors in Recoil
- Sectors are used to manage state in Recoil.
- Derived selectors are used to derive a value from other values in Recoil.
- The get function derives a value from counterAtom in Recoil and returns it.
- That value is then available in the evenSelctor selector.
```jsx
import { selector } from "recoil"
import counterAtom from "../atoms/counter"

const evenSelctor = selector({
    key: "evenSelctor", // unique ID
    get : function ({get}) {
        const count = get(counterAtom);
        return count % 2 === 0
    } // get function returns the value to which the selector will be resolved
})

export default evenSelctor
```