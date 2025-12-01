
import "../styles/profile.sass";

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="sidebar">
        <button>Sobre nosotros</button>
        <button>Mapa del sitio</button>
        <button>Editar perfil</button>
        <button>Eliminar cuenta</button>
      </div>

      <div className="perfil-card">
        <div className="perfil-header">
          <div className="foto"></div>
          <h2>USUARIO</h2>
        </div>

        <div className="perfil-info">
          <p><strong>Nombre:</strong> ____________________</p>
          <p><strong>Apellido:</strong> ____________________</p>
          <p><strong>Correo:</strong> ____________________</p>
          <p><strong>Edad:</strong> ____________________</p>
          <p><strong>Teléfono:</strong> ____________________</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
