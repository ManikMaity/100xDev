import React, { useState } from 'react'
import ToogleBulb from '../components/ToogleBulb'
import BulbState from '../components/BulbState'

function Lightbulb() {

  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Lightbulb</h1>
      <BulbState/>
      <ToogleBulb/>
    </div>
  )
}

export default Lightbulb
