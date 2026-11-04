import { useState } from "react";
import "../styles/login.css";

export default function LoginForm({ onSubmit }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario.trim() || !contrasena) {
      setError("Completá tu usuario y tu contraseña.");
      return;
    }
    setError("");
    // TODO: conectar con el backend (POST /api/login)
    onSubmit?.({ usuario: usuario.trim(), contrasena });
  };
 
  return (
    <section className="section-login">
        <form className="login" onSubmit={handleSubmit} noValidate>
            <h2 className="login__titulo">Iniciar sesión</h2>
            <label className="login__campo" htmlFor="usuario">
                Nombre de usuario
                <input
                id="usuario"
                type="text"
                autoComplete="username"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                />
            </label>
            <label className="login__campo" htmlFor="contrasena">
                Contraseña
                <input
                id="contrasena"
                type="password"
                autoComplete="current-password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                />
            </label>
            {error && (
                <p className="login__error" role="alert">
                {error}
                </p>
            )}
            <button className="login__boton" type="submit">
                Ingresar
            </button>
        </form>
    </section>
  );
}