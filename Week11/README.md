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
import React, { useState } from 'react'

function useCounter() {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
      setCount(prevCount => prevCount + 1)
    }

    return { count, increaseCount }
}

export default useCounter
```
```jsx
// App.jsx
  const {count, increaseCount} = useCounter();
```

### Create useFetch hook
```js
import React, { useEffect, useState } from 'react'

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

export default useFetch
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

### useDebounce