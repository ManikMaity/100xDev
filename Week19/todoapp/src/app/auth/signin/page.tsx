"use client"
import React, { useState } from "react"
import { Lock, Mail } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import { signinUserService } from "@/services/auth"
import { toast } from "react-toastify"

function Signin() {

  const [fromData, setFormData] = useState({
    email : "",
    password : ""
  })


  const {data : signInData, isPending, isError, mutateAsync : signinMutateAsync} = useMutation({
    mutationFn : signinUserService,
    onSuccess : (data) => {
      toast.info("Signin is successful");
      localStorage.setItem("nextjs-todo-app", data?.data?.token)
      console.log(data, "signin page");
    },
    onError : (error) => {
      toast.warn(error.message);
      console.log(error, "signin page"); 
    }
  })

  async function onSubmitFn (e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if (fromData?.email.trim() === "" || fromData?.password?.trim() == "") return;
    await signinMutateAsync({email : fromData.email, password : fromData.password});
  }




  return (
    <div className="h-full w-full flex items-center justify-center">
    <form onSubmit={onSubmitFn} className="flex flex-col bg-gray-800 rounded-lg p-4 max-w-lg gap-3">
      <p className="text-2xl text-center font-bold">Sign in</p>
      <label className="input input-bordered flex items-center gap-2">
        <Mail/>
        <input type="email" required minLength={3} className="grow" placeholder="Email" value={fromData.email} onChange={(e) => setFormData({...fromData, email : e.target.value})} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Lock/>
        <input type="password" required minLength={3} value={fromData.password} onChange={(e) => setFormData({...fromData, password: e.target.value})} className="grow" placeholder="Password" />
      </label>

      <button type="submit" disabled={isPending} className="btn btn-primary">{isPending ? <span className="loading loading-spinner loading-md"></span> :"Sign in"}</button>
    </form>
  </div>
  )
}

export default Signin;
