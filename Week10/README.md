## Routing
- In react we use `react-router-dom` for routing
- Routing is the process of mapping a path to a component and pages.
- We have to use `BrowserRouter`, `Routes` and `Route` for creating routing.
```js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```
```js
return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
```

- Then we can `Link` and `useNavigate` for routing or change between pages without refreshing.
```js
import { Link } from 'react-router-dom'
```
```js
<Link to="/about">About</Link>
<Link to="/">Home</Link>
```
- using `useNavigate` for routing
```js
const goBackAfter10s = () => {
        setTimeout(() => {
            navigator('/');
        }, 5000)
    }
```
- In the last of the route we have to implement and route for 404 page.
```js
<Route path='*' element={<Error />}/>
```

## Layout
- Layout is the structure of the page
- Using layout we can create a structure of the page and what components should be constant and what should be changing.
- We can create a layout for the page using `Outlet` from `react-router-dom`.
```js
// Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet/>
    </div>
  );
}
export default Layout;
```
- And inside the `App.jsx` we have to use the `Layout` component and inside Layout route we have to define our other routes.
```js
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

## useRef
- `useRef` is a hook that allows us to create a reference to a DOM element.
```js
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
```