import { useState, type JSX } from "react";
import { loginRequest } from "../services/auth.service";
import "../styles/login.sass";

/**
 * Login page component.
 * Renders login form and handles authentication logic.
 *
 * @returns JSX.Element
 */
export default function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    try {
      const success = await loginRequest({ username, password });

      if (!success) {
        setErrorMessage("Credenciales incorrectas");
        return;
      }

      // Redirect
      window.location.href = "/home";
    } catch (err) {
      setErrorMessage("Error al iniciar sesión");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src="/public/images/uvmeet-removebg-preview.png"
          alt="UVMeet Logo"
          className="login-logo"
        />

        <h2 className="login-title">Tu plataforma de videollamadas <br></br>favorita</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {errorMessage && (
            <p className="login-error" role="alert">
              {errorMessage}
            </p>
          )}

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <p className="login-footer">
          ¿No tiene cuenta? <a href="/register">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
