import { Link } from "react-router-dom"
import "./login.css"

export default function Register() {
  return (
    <>
        <main>
        
            <div className="contenedor1">
                <h2>Register</h2>
                <form action="">
                    <fieldset>
                        <div className="regis">
                            <label htmlFor="name">Nombre: </label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="regis">
                            <label htmlFor="user">Usuario: </label>
                            <input type="text" name="user" id="user" />
                        </div>
                        <div className="regis">
                            <label htmlFor="password">Contraseña: </label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div> <p>¿Ya tienes cuenta?</p> <Link to={"../login"}>Inicia sesión</Link> </div>
                        <button type="submit">Registrarse</button>
                    </fieldset>
                </form>
            </div>

        
        </main>
     </>
 )
}
