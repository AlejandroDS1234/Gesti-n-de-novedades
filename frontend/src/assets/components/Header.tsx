import { useState } from "react";

export default function Header({ onBuscar, sinLeer, tema, onTema, onNotificaciones, onPerfil }) {
  const [texto, setTexto] = useState("");

  function enviar(e) {
    e.preventDefault();
    onBuscar(texto.trim());
    setTexto("");
  }

  return (
    <header className="topbar">
      <form className="top-search" onSubmit={enviar}>
        <span>⌕</span>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Buscar en el sistema..." />
      </form>
      <div className="topbar-right">
        <button className="theme-toggle" onClick={onTema}
          title={tema === "oscuro" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
          <span>{tema === "oscuro" ? "☀" : "☾"}</span>
          <span className="theme-label">{tema === "oscuro" ? "Modo claro" : "Modo oscuro"}</span>
        </button>
        <button className="bell" onClick={onNotificaciones} aria-label="Notificaciones">
          ♫{sinLeer > 0 && <span className="bell-badge">{sinLeer}</span>}
        </button>
        <button className="user-chip" onClick={onPerfil}>
          <span className="user-avatar">JS</span>
          <span className="user-info"><strong>Usuario</strong><small>Aprendiz</small></span>
          <span className="chevron">⌄</span>
        </button>
      </div>
    </header>
  );
}
