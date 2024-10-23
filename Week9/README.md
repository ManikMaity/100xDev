# React Harkirat

## Vite 
- Vite is used to build the React app.
- Its is a build tool.
- To create vite project use
```js
npm create vite@latest
```

## What Learned 
- Leaned export and import 
- Basic of react component
- Props 
- useState
- useEffect


## Extra
- In package.json we have `react dom` because we are using to web development.

## Children in React
- The Children prop helps to pass other component inside a component.
- We can use normal prop to pass using property as usual.

### Prop way to pass componet 
- Uncommon way
```js
function Card({innerContent}) {
  return (
    <div className='min-h-4 min-w-6 max-w-md p-6 m-3 rounded-md bg-gray-900'>
      {innerContent}
    </div>
  )
}

export default Card
```
```js
 <Card innerContent={<p>HI</p>}/>
```

### Children way to pass componet
- This is the most common way.
- Easy to write and understand
```js
function Card({children}) {
  return (
    <div className='min-h-4 min-w-6 max-w-md p-6 m-3 rounded-md bg-gray-900'>
      {children}
    </div>
  )
}

export default Card
```
```js
 <Card>
  <p>HI</p>
 </Card>
```

## Class Based Components Vs Function Based Components
```js
import React, { Component } from "react";

export default class ClassBased extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>InCrease</button>
      </>
    );
  }
}
```
## LyfeCycle Events
- useEffect
- LyfeCycle event is used to trigger the function in the component.
- It is used to trigger the function in the component in simple language useEffect.
```js
function NewCard() {

    useEffect(() => {
        console.log("Component mounted")
        return () => {
            console.log("Component unmounted")
        }
    }, [])


  return (
    <div className='min-h-4 min-w-6 max-w-md p-6 m-3 rounded-md bg-gray-900'>
      <img src="https://placehold.co/600x400" alt="" />
    </div>
  )
}

export default NewCard
```

## Error Boundary
- `npm i react-error-boundary`
- `import ErrorBoundary from 'react-error-boundary'`
- `ErrorBoundary` is used to catch the error in the component.
```js
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <NewCard />
        </ErrorBoundary>
```
### React Fragment
- `<></>`
- In react fragment we can pass the multiple component in the same file.