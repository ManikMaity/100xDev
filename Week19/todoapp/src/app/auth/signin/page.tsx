import { Lock, Mail } from "lucide-react"

function page() {
  return (
    <div className="h-full w-full flex items-center justify-center">
    <div className="flex flex-col bg-gray-800 rounded-lg p-4 max-w-lg gap-3">
      <p className="text-2xl text-center font-bold">Sign in</p>
      <label className="input input-bordered flex items-center gap-2">
        <Mail/>
        <input type="email" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Lock/>
        <input type="password" className="grow" placeholder="Password" />
      </label>

      <button className="btn btn-primary">Sign in</button>
    </div>
  </div>
  )
}

export default page
