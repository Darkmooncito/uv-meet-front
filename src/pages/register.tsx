import React, { useState } from "react";
import "../styles/register.sass";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    confirmar: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <img
          src="../../public/images/uvmeet-removebg-preview.png"
          alt="UVMeet Logo"
          className="logo"
        />
        <p className="subtitle">Tu plataforma de videollamadas favorita</p>
      </div>

      <div className="right-section">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2>crea tu cuenta</h2>

          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            required
          />

          <label>Correo</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            value={form.contraseña}
            onChange={handleChange}
            required
          />

          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmar"
            value={form.confirmar}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-registrarse">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
