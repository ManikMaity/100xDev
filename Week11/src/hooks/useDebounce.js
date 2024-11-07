import React, { useRef } from 'react'

function useDebounce(cb, delay) {
    const timer = useRef()

    return (...args) => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => cb(...args), delay)
    }
}

export default useDebounce
