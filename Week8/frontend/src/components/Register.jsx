// register code here
import React from 'react'
import axios from "axios"


const Register = () => {
    // call the functions onClick of button.
    async function handleRegister() {
        // const resposne = await axios.post(); // if you don't know about axios, give it a read https://axios-http.com/docs/intro
    }
    return (
        <div className="flex justify-center items-center h-screen bg-base-200">
        <div className="w-full max-w-md p-8 bg-base-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-neutral-content">Register</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-neutral-content" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="input input-bordered w-full"
                placeholder="Enter your username"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-neutral-content" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-neutral-content" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-neutral-content" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="input input-bordered w-full"
                placeholder="Confirm your password"
              />
            </div>
  
            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    )
}

export default Register