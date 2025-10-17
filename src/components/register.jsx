import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import  fetchRegister  from "../JS/fetchRegister"
import "./login.css"

export default function Register() {

    const Navigate = useNavigate();
    const [RegistUser, SetRegistUser] = useState("");
    const [RegistPassword, SetRegistPassword] = useState("");

    async function handleRegister(e){
        e.preventDefault();

        const res = await fetchRegister(RegistUser,RegistPassword)

        if (res.ok) {
            alert("Usuarie creade correctamente :)")
            Navigate("/login")
        }else{
            throw new Error("Error al crear el usuario");
            
        }
    }



  return (

    <>
        <main>
        
            <div className="contenedor1">
                <h2>Register</h2>
                <form action="">
                    <fieldset>
                        
                        <div className="regis">
                            <label htmlFor="user">Usuario: </label>
                           <input 

                            type="text" 
                            name="user" 
                            id="user" 
                            value={RegistUser}
                            onChange={(e) => SetRegistUser(e.target.value)}
                            />
                        </div>
                        <div className="regis">
                            <label htmlFor="password">Contraseña: </label>

                           <input 
                            type="password"
                            name="password" 
                            id="password" 
                            value={RegistPassword}
                            onChange={(e) => SetRegistPassword(e.target.value)}
                            />

                        </div>
                        <div> <p>¿Ya tienes cuenta?</p> <Link to={"/login"}>Inicia sesión</Link> </div>
                        <button type="submit" onClick={handleRegister}>Registrarse</button>
                    </fieldset>
                </form>
            </div>

        
        </main>
     </>
 )
}
