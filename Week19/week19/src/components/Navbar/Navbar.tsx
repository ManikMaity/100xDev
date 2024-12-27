import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="">
      <ul className="flex px-2 justify-between items-center h-10 bg-white text-black relative shadow-sm font-mono">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/auth/signin">Signin</Link></li>
        <li><Link href="/auth/signup">Signup</Link></li>
        <li><Link href="/user">User</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
