import { Link} from "react-router-dom"
import { useState } from "react"
import fetchLogin from "../JS/fetchLogin"
import { useNavigate } from "react-router-dom"
import video from "../assets/for.mp4"
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
    
        <main className="login-main">
            <aside>
            <video 
                className="videoloop"
                src={video} 
                autoPlay 
                loop 
                muted 
                width="370"
                height="500"
            />
            
            </aside>
            <div className="contenedor1">
                <h2>Login</h2>
                <form action="">
                    <fieldset className="fldLogin">

                        <legend>༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎</legend>

                        <div className="usu">

                            <input 
                                type="text" 
                                name="user" 
                                id="user"
                                placeholder="Username"
                                value={userName} 
                                onChange={e =>{SetUsername(e.target.value)}}
                            />

                        </div>
                        <div className="pass">
                           <input 
                            type="password" 
                            name="contraseña" 
                            id="password" 
                            placeholder="Password"
                            value={password}
                            onChange = {e => SetPassword(e.target.value)}/>
                        </div>
                    </fieldset>
                    <div><p>¿No tienes cuenta?</p> <Link to={"/register"}>¡Crea una!</Link></div>
                    <button type="submit" onClick={handleLogin} className="btnLogin"> Iniciar sesión</button>
                </form>
            </div>
        </main>

    
    </>
  )
}
