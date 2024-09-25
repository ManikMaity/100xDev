// firstly, Don't get overwhelmed and if you are then go with client-easy.
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import AddCourseForm from "./components/AddCourseForm"
function App() {

  const router = createBrowserRouter([
    {
        path : "/",
        element : <Dashboard/>
    },
    {
        path : "signup",
        element : <Signup/>
    }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
