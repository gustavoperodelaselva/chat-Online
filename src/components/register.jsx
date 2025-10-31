import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import  fetchRegister  from "../JS/fetchRegister"
import video from "../assets/background.mp4"
import "./register.css"

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
             <video
                className="background-video"
                src={video}
                autoPlay
                loop
                muted
            />
            <div className="contenedorRegister">
                <h2>Register</h2>
                <form action="">
                    <fieldset>
                        <legend>𓆩𓆪𓆩𓆪𓆩𓆪𓆩𓆪𓆩𓆪</legend>
                        <div className="registUser">
                           <input 

                            type="text" 
                            name="user" 
                            id="user" 
                            placeholder="Username"
                            value={RegistUser}
                            onChange={(e) => SetRegistUser(e.target.value)}
                            />
                        </div>
                        <div className="registPassword">

                           <input 
                            type="password"
                            name="password" 
                            id="password" 
                            placeholder="Password"
                            value={RegistPassword}
                            onChange={(e) => SetRegistPassword(e.target.value)}
                            />

                        </div>
                        <div> <p>¿Ya tienes cuenta?</p> <Link to={"/login"}>Inicia sesión</Link> </div>
                        <button className="register-btn" type="submit" onClick={handleRegister}>Registrarse</button>
                    </fieldset>
                </form>
            </div>

        
        </main>
     </>
 )
}
