import "/home/guss/Documentos/Programacion/chat-Online/src/assets/css/perfil.css"

function Perfil() {
    return (
        <div className="profile-container">
            <header className="profile-header">
                <figure className="profile-img">
                    <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
                </figure>
            <span className="profile-user"><h2>Gusss</h2></span>

            </header>
            <section className="profile-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut quae, sed iste laudantium numquam praesentium eius dolor perferendis ex qui. Esse eaque, facere libero labore blanditiis voluptatum similique! Nulla!</p>
            </section>
                <button className="profile-button-editar">Editar Perfil</button>

        </div>
    );
};

export default Perfil;