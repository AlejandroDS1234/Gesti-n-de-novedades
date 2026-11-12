
import { useState } from "react";
import "../css/PageIndex.css";

function Index() {

  // Estado que controla si el video está silenciado
  const [silenciado, setSilenciado] = useState(true);

  // Función para cambiar el sonido del video
  const cambiarSonido = () => {
    setSilenciado((estadoAnterior) => !estadoAnterior);
  };

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar-home">

        <div className="marca-sena">
          <img src="/logo-sena.png" alt="Logo SENA" />

          <div>
            <h2>Gestión de Novedades</h2>
            <p>Centro de Biotecnología Industrial</p>
          </div>
        </div>

        <div class="espa">  </div>
        
        <div className="enlaces-navbar">

          <a
            href="https://oferta.senasofiaplus.edu.co/sofia-oferta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOFIA Plus ↗
          </a>

          <a
            href="https://historico.sena.edu.co/es-co/transparencia/Paginas/politicas-lineamientos.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seguridad y privacidad
          </a>

          <a
            href="https://historico.sena.edu.co/es-co/Paginas/politicasCondicionesUso.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Políticas y condiciones
          </a>

        </div>

      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="contenido-home">

        {/* VIDEO IZQUIERDO */}
        <section className="video-home">

          <video
            autoPlay
            loop
            playsInline
            muted={silenciado}
          >
            <source
              src="/VideoProject1.mp4"
              type="video/mp4"
            />
            Tu navegador no admite videos.
          </video>

          <button
            type="button"
            onClick={cambiarSonido}
            aria-label={silenciado ? "♪" : "⊘"}
          >
            {silenciado ? "♪" : "⊘"}
          </button>

        </section>

        {/* PANEL DERECHO */}
        <section className="acceso-home">

          <div className="contenido-acceso">

            <img
              src="/logo-sena.png"
              alt="Logo SENA"
              className="logo-acceso"
            />

            <span className="etiqueta-home">
              SISTEMA INSTITUCIONAL
            </span>

            <h1>
              Gestión de
              <br />
              <span>novedades</span>
            </h1>

            <div className="linea-home"></div>

            <span>BIENVENIDOS</span>

            <h4>
              La comunicación construye oportunidades.
            </h4>

            <p>
              Centro de Biotecnología Industrial · CBI Palmira
            </p>

            <ol class="login">
              <a href="/login">login</a>
            </ol>

            <div className="nota-home">
              Acceso exclusivo para usuarios autorizados
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer-home">
        <p>SENA · Centro de Biotecnología Industrial · CBI Palmira</p>
        <p>Más formación, más oportunidades.</p>
      </footer>

    </div>
  );
}

export default Index;
