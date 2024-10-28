import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{backgroundColor: 'red', padding: '10px', color: 'white', display: 'flex', justifyContent: 'space-between'}}>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/signin">Signin</Link>
    </nav>
  )
}

export default Navbar
