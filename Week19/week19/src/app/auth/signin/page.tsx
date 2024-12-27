"use client"
import TextInput from '@/components/Inputs/TextInput';
import React, { ChangeEvent, useState } from 'react'

function Signin() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleEmailChange (e : ChangeEvent<HTMLInputElement>){
        setFormData({
            ...formData,
            email: e.target.value
        })
    }

    function handlePasswordChange (e : ChangeEvent<HTMLInputElement>){
        setFormData({
            ...formData,
            password: e.target.value
        })
    }


  return (
    <form className='flex flex-col gap-4 justify-center items-center min-h-[calc(100vh-4rem)]'>
        <input className='p-1 rounded-sm' type="email" name="email" placeholder='Enter your email' id="email" value={formData.email} onChange={handleEmailChange} />
        <input className='p-1 rounded-sm' type="password" name="password" placeholder='Enter your password' id="password" value={formData.password} onChange={handlePasswordChange} />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Signin</button>
    </form>
  )
}

export default Signin;
