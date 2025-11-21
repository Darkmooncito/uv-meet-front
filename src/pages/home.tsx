import { useState } from "react";
import "../styles/home.sass";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="left-section">
          <button className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
            ☰
          </button>
          <img
            src="../../public/images/uvmeet-removebg-preview.png"
            alt="UVMeet"
            className="logo"
          />
        </div>

        <div className="nav-links">
          <a href="#">sobre nosotros</a>
          <a href="#">mapa del sitio</a>
          <a href="#">menu</a>
        </div>
      </nav>

      {/* MENU DESPLEGABLE */}
      <div className={`side-menu ${openMenu ? "open" : ""}`}>
        <h3>REUNIONES</h3>
        <a href="#">Iniciar sesión</a>
        <a href="#">Crear cuenta</a>
        <a href="#">Recuperar contraseña</a>
        <a href="#">Crear reunión</a>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <section className="main-content">
        <h1>Videoconferencias seguras para todos</h1>
        <p className="subtext">
          conecta y colabora con los que quieras en uv meet
        </p>

        <p className="question">¿Que deseas hacer?</p>

        <div className="actions">
          <button className="btn-red">crear reunion</button>

          <div className="join-box">
            <input type="text" placeholder="ingrese el link de la reunion" />
            <button className="btn-red small">unirme</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-section">
          <h4>ACCESO</h4>
          <a href="#">Iniciar Sesion</a>
          <a href="#">Crear cuenta</a>
          <a href="#">Recuperar contraseña</a>
        </div>

        <div className="footer-section">
          <h4>CUENTA Y SOPORTE</h4>
          <a href="#">Editar perfil</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Contacto</a>
        </div>

        <div className="footer-section">
          <h4>NAVEGACION</h4>
          <a href="#">Inicio</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Reuniones</a>
        </div>

        <div className="footer-section">
          <h4>CONTACTO</h4>
          <span>moviewave@gmail.com</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
