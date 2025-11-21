import React, { useState } from "react";
import "../styles/forgot.sass";

const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Correo enviado:", email);
  };

  return (
    <div className="recover-container">
      <div className="recover-box">
        <img
          src="../../public/images/uvmeet-removebg-preview.png"
          alt="UVMeet Logo"
          className="logo"
        />

        <h3>Ingrese el correo de recuperacion</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="btn-confirmar">
            confirmar
          </button>
        </form>

        <p className="no-cuenta">¿No tiene cuenta?</p>
        <a href="/register" className="registrate">Registrate</a>
      </div>
    </div>
  );
};

export default RecoverPassword;
