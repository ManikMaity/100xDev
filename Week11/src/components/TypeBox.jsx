import React, { useDebugValue, useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useDebounceValue from '../hooks/useDebounceValue'

const style = {
    padding: '10px',
    width : '300px',
    margin : '10px'
}

function TypeBox() {

   const [value, setValue] = useState('')
   const debounceValue = useDebounceValue(value, 1000)

   useEffect(() => {
       console.log(debounceValue)
   }, [debounceValue])

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} style={style} type="text" name="textBox" id="textBox" placeholder="Type here" />
    </div>
  )
}

export default TypeBox
