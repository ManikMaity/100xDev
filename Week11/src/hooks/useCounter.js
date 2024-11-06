import React, { useState } from 'react'

function useCounter() {
    const [count, setCount] = useState(1);
    const increaseCount = () => {
      setCount(prevCount => prevCount + 1)
    }

    return { count, increaseCount }
}

export default useCounter
