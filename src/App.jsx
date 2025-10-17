import Login from "./components/login"
import Register from "./components/register"
import Inicio from "./components/inicio"
import MainPage from "./components/mainPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },{
    path:"/login",
    element: <Login />
  },{
    path:"/register",
    element: <Register />
  },{
    path: "/mainPage",
    element: <MainPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App