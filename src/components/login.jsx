import { Link} from "react-router-dom"
import { useState } from "react"
import fetchLogin from "../JS/fetchLogin"
import { useNavigate } from "react-router-dom"
import "./login.css";

export default function Login() {

    const Navigate = useNavigate();
    const [userName, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

      async function handleLogin(e) {
        e.preventDefault();
        const res = await fetchLogin (userName, password);

        if (res.ok) {
            console.log("bienvenide", userName);
            Navigate("/mainPage");
        } else {
            console.error("Error en el inicio de sesión:");
        }

      }


  return (
    <>
    
        <main>
            <div className="contenedor1">
                <h2>Login</h2>
                <form action="">
                    <fieldset>
                        <div className="usu">

                            <label htmlFor="user">Usuario:</label>
                            <input 
                                type="text" 
                                name="user" 
                                id="user"
                                value={userName} 
                                onChange={e =>{SetUsername(e.target.value)}}
                            />

                        </div>
                        <div className="pass">
                            <label htmlFor="password">Contraseña:</label>
                           <input 
                            type="password" 
                            name="contraseña" 
                            id="password" 
                            value={password}
                            onChange = {e => SetPassword(e.target.value)}/>
                        </div>
                    </fieldset>
                    <div><p>¿No tienes cuenta?</p> <Link to={"/register"}>¡Crea una!</Link></div>
                    <button type="submit" onClick={handleLogin}> Iniciar sesión</button>
                </form>
            </div>
        </main>

    
    </>
  )
}
