import Login from "./components/login"
import Register from "./components/register"
import Inicio from "./components/inicio"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },{
    path:"register",
    element: <Register />
  },{
    path:"login",
    element:<Login />
  }
])




function App() {
  

  return (
    <RouterProvider router={router} />  )
}

export default App
