"use client";
import { signupUserService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {

  const [fromData, setFormData] = useState({
    username : "",
    email : "",
    password : ""
  });

  const router = useRouter();

  const {mutateAsync : signupMutateAsync, isPending} = useMutation({
    mutationFn : signupUserService,
    onSuccess : (data) => {
      toast.info("Signup is successful");
      console.log(data, "signup page");
      setFormData({username : "", email : "", password : ""});
      router.push("/auth/signin");
    },
    onError : (error) => {
      toast.warn(error.message);
    }
  })

  async function onSubmitFn (e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if (fromData?.email.trim() === "" || fromData?.password?.trim() == "" || fromData?.username?.trim() == "") return;
    await signupMutateAsync({...fromData})
  }


  return (
    <div className="h-full w-full flex items-center justify-center">
      <form onSubmit={onSubmitFn} className="flex flex-col bg-gray-800 rounded-lg p-4 max-w-lg gap-3">
        <p className="text-2xl text-center font-bold">Sign up</p>
        
        <label className="input input-bordered flex items-center gap-2">
          <User/>
          <input type="text" required onChange={(e) => setFormData({...fromData, username : e.target.value})} value={fromData.username} className="grow" placeholder="username" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <Mail/>
          <input type="email" required onChange={(e) => setFormData({...fromData, email : e.target.value})} value={fromData.email} className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <Lock/>
          <input type="password" required onChange={(e) => setFormData({...fromData, password : e.target.value})} value={fromData.password} className="grow" placeholder="Password" />
        </label>

        <button className="btn btn-primary" disabled={isPending}>{isPending ? <span className="loading loading-spinner loading-md"></span> : "Sign up"}</button>
      </form>
    </div>
  );
}

export default Signup;
