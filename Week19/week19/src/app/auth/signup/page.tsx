"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Signup() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email : "",
        password : "",
        confirmPassword : ""
    })



  async  function handleSignupSubmit(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const response = axios.post("http://localhost:3000/api/v1/auth/signup", {
            email : formData.email,
            password : formData.password
        });

        console.log(response);
        router.push("/auth/signin");
    }


  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-gray-950">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form className="space-y-4" onSubmit={handleSignupSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email : e.target.value}))}
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        onChange={(e) => setFormData(prev => ({...prev, password : e.target.value}))}
                        value={formData.password}
                        name="password"
                        type="password"
                        minLength={6}
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        id="confirm-password"
                        onChange={(e) => setFormData(prev => ({...prev, confirmPassword : e.target.value}))}
                        value={formData.confirmPassword}
                        name="confirm-password"
                        type="password"
                        minLength={6}
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup
