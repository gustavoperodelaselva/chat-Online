import "./Inicio.css";
import { Link } from "react-router-dom"; 
export default function Inicio(){
    return (
        <>
            
            <header>
                <div className="contenedor">
                    <h2 className="logo">chatOnline</h2>
                    <nav>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </nav>
                </div>
            </header>

            <main>
                <div className="principal">
                    <div className="contenedor">
                        <h3 className="titulo">chatOnline</h3>
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla mollitia odio sint, repudiandae soluta, possimus quaerat magni eius ipsa quod nobis ipsum, beatae harum voluptatem! Debitis sunt voluptates animi.</p>
                        <button className="boton" role="button" ><i class="fa-solid fa-circle-info"></i>Mas informacion</button>
                        <button className="boton" role="button"><i class="fa-solid fa-circle-user"></i>Creadores</button>
                    </div>
                </div>
            </main>
            

        
        </>
    )
}