"use client"
import { useState } from "react";

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='flex flex-col items-center mt-10 gap-2 text-black'>
      Signin
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Email' name="" id="" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' name="" id="" />
        <button className='bg-blue-500 text-white p-3 rounded-md'>Signin</button>
    </div>
  )
}

export default Signin
