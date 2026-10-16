import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import "../index.css";

function LoginQuery(datos: { usuario: string; contrasena: string }) {
  return fetch("/api/login", {
    body: JSON.stringify(datos),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

function Login() {
  // Estos estados guardan lo que se escribe y lo que debe mostrarse.
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [esError, setEsError] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: LoginQuery,
    onSuccess: (data) => {
      if (data.success) {
        navigate("/inicio");
      } else {
        setEsError(true);
        setMensaje(data.message || "Error desconocido al iniciar sesión.");
      }
    }
  })

  function limpiarMensaje() {
    setMensaje("");
    setEsError(false);
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    // Evita que el navegador recargue la página al enviar el formulario.
    evento.preventDefault();
    // trim() ignora espacios al principio o al final del usuario.
    if (!usuario.trim() || !contrasena) {
      setEsError(true);
      setMensaje("Por favor, completa el usuario y la contraseña.");
      return;
    }
    mutate({ usuario: usuario.trim(), contrasena: contrasena });
  }

  return (
    <main className="pagina">
      <section className="panel-izquierdo">
        <header className="encabezado">
          <img src="/logo-sena.png" alt="Logo SENA" className="logo-superior" />

          <div className="separador" />

          <div className="nombre-centro">
            <h2>CBI Palmira</h2>
            <p>Centro de Biotecnología Industrial</p>
          </div>
        </header>

        <div className="mensaje">
          <h1>
            Tu talento
            <br />
            también
            <br />
            <span>construye</span>
            <br />
            el cambio
          </h1>
          <div className="linea-verde" />
        </div>

        <footer className="pie-izquierdo">
          <div className="opcion">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M3 12 16 5 29 12 16 19Z" />
              <path d="M8 15v7c5 4 11 4 16 0v-7" />
              <path d="M29 12v9" />
            </svg>
            <span>Aprendices</span>
          </div>

          <div className="opcion">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="10" cy="8" r="4" />
              <path d="M2 25v-3a8 8 0 0 1 16 0v3" />
              <rect x="20" y="5" width="10" height="13" rx="1" />
              <path d="M23 22l-3 4m7-8v7" />
            </svg>
            <span>Instructores</span>
          </div>

          <div className="opcion">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M26 4C12 5 5 11 6 20c1 6 7 9 12 5 6-5 5-13 8-21Z" />
              <path d="M4 29 18 14" />
            </svg>
            <span>Ambientes</span>
          </div>
        </footer>
      </section>

      <section className="panel-derecho">
        <div className="decoracion-superior" />
        <div className="decoracion-inferior" />

        <div className="tarjeta-login">
          <div className="marca-login">
            <img src="/logo-sena.png" alt="Logo SENA" className="logo-login" />
            <div className="raya-logo" />
          </div>

          <div className="titulo-login">
            <h2>Iniciar sesión</h2>
            <p>
              Accede a tu cuenta para gestionar
              <br />
              las novedades del centro.
            </p>
          </div>

          <form id="formularioLogin" onSubmit={manejarEnvio} noValidate>
            {/* Los valores vienen del estado y se actualizan al escribir. */}
            <div className="campo">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21v-2a8 8 0 0 1 16 0v2z" />
              </svg>

              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                autoComplete="username"
                value={usuario}
                onChange={(evento) => {
                  setUsuario(evento.target.value);
                  limpiarMensaje();
                }}
                required
              />
            </div>

            <div className="campo">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V6a4 4 0 0 1 8 0v4" />
                <circle cx="12" cy="15" r="1" />
                <path d="M12 16v2" />
              </svg>

              <input
                type={mostrarContrasena ? "text" : "password"}
                id="contrasena"
                name="contrasena"
                placeholder="Contraseña"
                autoComplete="current-password"
                value={contrasena}
                onChange={(evento) => {
                  setContrasena(evento.target.value);
                  limpiarMensaje();
                }}
                required
              />

              {/* Alterna entre mostrar y ocultar la contraseña. */}
              <button
                type="button"
                id="verContrasena"
                className="boton-ojo"
                aria-label={
                  mostrarContrasena
                    ? "Ocultar contraseña"
                    : "Mostrar contraseña"
                }
                aria-pressed={mostrarContrasena}
                onClick={() => setMostrarContrasena((actual) => !actual)}
              >
                {mostrarContrasena ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18" />
                    <path d="M10.6 5.2A10 10 0 0 1 12 5c6.5 0 10 7 10 7s-1 2-3 3.8" />
                    <path d="M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a9 9 0 0 0 3-.5" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            <button type="submit" className="boton-ingresar">
              <span>Iniciar sesión</span>
              <svg viewBox="0 0 28 24" aria-hidden="true">
                <path d="M2 12h22M15 3l9 9-9 9" />
              </svg>
            </button>

            {/* Las clases cambian para mostrar el mensaje y señalar errores. */}
            <p
              id="mensajeEstado"
              className={`mensaje-estado${mensaje ? " visible" : ""}${esError ? " error" : ""}`}
              role="status"
              aria-live="polite"
            >
              {mensaje}
            </p>
          </form>

          <div className="acceso-restringido">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10" width="14" height="12" rx="2" />
              <path d="M8 10V6a4 4 0 0 1 8 0v4" />
              <circle cx="12" cy="15" r="1" />
            </svg>
            <span>Acceso restringido</span>
          </div>

          <footer className="pie-tarjeta">
            <div className="linea-final">
              <span />
            </div>

            <h3>
              SENA <b>·</b> CBI Palmira
            </h3>
            <p>Más formación, más oportunidades</p>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Login;
