import { Link } from "react-router-dom"


export default function Login() {
  return (
    <>
    
        <header> 
        <h1>Login</h1>
         </header>
        <main>
            <form action="">
                <fieldset>
                    <div>
                    <label htmlFor="user">Usuario:</label>
                    <input type="text" name="user" id="user"/>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="contraseña" id="password" />
                    </div>
                </fieldset>
                <div><p>No tienes cuenta</p> <Link to="register">Crea una</Link></div>
                <button type="submit"> Iniciar sesión</button>
            </form>
        </main>

    
    </>
  )
}
