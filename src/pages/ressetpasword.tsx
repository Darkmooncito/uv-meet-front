import React, { useState } from "react";
import "../styles/ressetpassword.sass";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Nueva contraseña:", password);
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <img
          src="../../public/images/uvmeet-removebg-preview.png"
          alt="UVMeet Logo"
          className="logo"
        />

        <form onSubmit={handleSubmit}>
          <label>Ingrese su nueva contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Repita su nueva contraseña</label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-confirmar">
            confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
