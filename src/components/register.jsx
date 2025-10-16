import { Link } from "react-router-dom"

export default function Register() {
  return (
    <>
    <header>
        <h1>Register</h1>
    </header>
    <main>
        <section>
            <form action="">
                <fieldset>

                    <div>
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" name="name" id="name" />
                    </div>

                    <div>
                        <label htmlFor="user">Usuario: </label>
                        <input type="text" name="user" id="user" />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" name="password" id="password" />
                    </div>


                    <div> <p>¿Ya tienes cuenta?</p> <Link to={"/"}>Inicia sesión</Link> </div>

                    <button type="submit">Registrarse</button>
                </fieldset>
            </form>

        </section>
    </main>
     </>
 )
}
