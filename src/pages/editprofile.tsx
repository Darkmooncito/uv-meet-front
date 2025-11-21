import React from "react";
import "../styles/editprofile.sass";

const EditarPerfil = () => {
  return (
    <div className="editar-container">

      <div className="sidebar">
        <button>Sobre nosotros</button>
        <button>Mapa del sitio</button>
        <button>Volver al perfil</button>
      </div>

      <div className="editar-card">
        <h2>Editar Perfil</h2>

        <form>
          <label>Nombre</label>
          <input type="text" />

          <label>Apellido</label>
          <input type="text" />

          <label>Correo</label>
          <input type="email" />

          <label>Edad</label>
          <input type="number" />

          <label>Teléfono</label>
          <input type="text" />

          <button className="guardar">Guardar cambios</button>
        </form>
      </div>

    </div>
  );
};

export default EditarPerfil;
