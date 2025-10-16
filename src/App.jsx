import Login from "./components/login"
import Register from "./components/register"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },{
    path:"register",
    element: <Register />
  }
])




function App() {
  

  return (
    <RouterProvider router={router} />  )
}

export default App
