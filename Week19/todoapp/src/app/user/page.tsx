import { Mail, User } from "lucide-react"

function page() {

    const user = {
        username : "Manik Miaty",
        email : "f3eJc@example.com",
        todosNumber : 5,
        completedTodosNumber : 3
    }
    

  return (
    <div className="h-full grid place-content-center">
      <div className="flex flex-col p-4 rounded-lg bg-gray-800 gap-3">
        <h3 className="font-semibold text-2xl text-center">User</h3>
        <p className="flex gap-2"><User/>{user.username}</p>
        <p className="flex gap-2"><Mail/>{user.email}</p>
        <div className="grid grid-cols-2 border rounded-md text-center">
            <div className="p-2 bg-blue-400/20 border-r">
                <p className="font-semibold">Todos</p>
                <p>{user.todosNumber}</p>
            </div>
            <div className="p-2 bg-green-400/20">
                <p className="font-semibold">Completed</p>
                <p>{user.completedTodosNumber}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
