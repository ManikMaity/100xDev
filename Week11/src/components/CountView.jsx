import React from 'react'
import { useRecoilValue } from 'recoil'
import counterAtom from '../store/atoms/counter'

const style = {
    padding: '10px',
    width : '300px',
    margin : '10px'
}

function CountView() {

   const count =  useRecoilValue(counterAtom)


  return (
    <input style={style} type="text" name="count" id="" value={count} readOnly />
  )
}

export default CountView
