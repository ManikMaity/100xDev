import React, { useContext } from 'react'
import DummyContext from '../context/dummyContext'

function ToogleBulb() {

    const {setBulbOn} = useContext(DummyContext)

  return (
    <div >
      <button onClick={() => setBulbOn(prev => !prev)} style={{fontSize: '30px'}}>🔦</button>
    </div>
  )
}

export default ToogleBulb
