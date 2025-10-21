import Chat from "./chat";
import { Rnd } from "react-rnd";
import "../assets/css/mainPage.css";
export default function MainPage() {
  return (
    <>
      <Rnd enableResizing={false}
        dragHandleClassName="chat-drag-handle"
        default={{
        x: 400,
        y: 40
      }}
      >
      <div className="chat-drag-handle" >
      </div>
      <Chat />
    
     </Rnd>
    </>
  );
}
