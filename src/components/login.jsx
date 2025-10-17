import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <>
    
        <main>
            <div className="contenedor1">
                <h2>Login</h2>
                <form action="">
                    <fieldset>
                        <div className="usu">
                            <label htmlFor="user">Usuario:</label>
                            <input type="text" name="user" id="user"/>
                        </div>
                        <div className="pass">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" name="contraseña" id="password" />
                        </div>
                    </fieldset>
                    <div><p>¿No tienes cuenta?</p> <Link to={"../register"}>¡Crea una!</Link></div>
                    <button type="submit"> Iniciar sesión</button>
                </form>
            </div>
        </main>

    
    </>
  )
}
