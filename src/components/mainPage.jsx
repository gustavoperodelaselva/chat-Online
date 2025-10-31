import Chat from "./chat";
import { Rnd } from "react-rnd";
import "../assets/css/mainPage.css";
import Perfil from "./perfil";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { RiMenu3Fill } from "react-icons/ri";



export default function MainPage() {

  const [showPerfil, setShowPerfil] = useState(true);
  const [isOpen, setIsOpen] = useState(false)


   const icon =  isOpen ? <TfiMenu /> : <RiMenu3Fill />
   const handleBtn = () =>{
    setIsOpen(!isOpen)
    setShowPerfil(!showPerfil)
   }


  return (
    <>
      <Rnd enableResizing={false}
        dragHandleClassName="chat-drag-handle"
        default={{
        x: 560,
        y: 75
      }}
      >
      <div className="chat-drag-handle" >
      </div>
      <Chat />

     </Rnd>

    <button className="btn-showperfil" onClick={ handleBtn}>{icon}</button>

     {showPerfil && <Perfil />}
    </>
  );
}
