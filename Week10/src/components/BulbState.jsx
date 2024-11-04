import React, { useContext, useState } from 'react'
import DummyContext from '../context/dummyContext'

function BulbState() {
    const {bulbOn} = useContext(DummyContext)
  return (
    <div style={{fontSize: '100px', color: 'white'}}>
      {bulbOn ? '☀️' : '🌙'}
    </div>
  )
}

export default BulbState
