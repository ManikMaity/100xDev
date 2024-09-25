// login code here
import axios from 'axios';
import React from 'react'

const Login = ({setShowRegister}) => {
    // call the functions onClick of button.
    async function handleLogin() {
        const resposne = await axios.post(); // // if you don't know about axios, give it a read https://axios-http.com/docs/intro
    }
    return (
        <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="w-full max-w-md p-8 bg-base-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-neutral-content">Sign In</h2>
        <form>
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

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-neutral-content">
          Don't have an account? <a className="text-primary" onClick={() => setShowRegister(true)}>Register here</a>
        </p>
      </div>
    </div>
    )
}

export default Login