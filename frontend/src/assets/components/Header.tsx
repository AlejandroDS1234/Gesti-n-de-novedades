import { useState, useEffect } from "react";
import { useSesion } from "../../api/sesion"; 

export default function Header() {
  const TEMA_KEY = "cbi-tema";
  const [texto, setTexto] = useState("");
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem(TEMA_KEY) || "oscuro";
    } catch {
      return "oscuro";
    }
  });
  const { data } = useSesion(["nombre_rol", "nombre1_user"])

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    localStorage.setItem(TEMA_KEY, tema);
  }, [tema]);

//   function enviar(e) {
//     e.preventDefault();
//     onBuscar(texto.trim());
//     setTexto("");
//   }

  return (
    <header className="topbar">
      <form className="top-search">{/*onSubmit={enviar}*/}
        <span>⌕</span>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Buscar en el sistema..." />
      </form>
      <div className="topbar-right"> 
        <button className="theme-toggle" onClick={() => setTema(tema === "oscuro" ? "claro" : "oscuro")}
          title={tema === "oscuro" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
          <span>{tema === "oscuro" ? "☀" : "☾"}</span>
          <span className="theme-label">{tema === "oscuro" ? "Modo claro" : "Modo oscuro"}</span>
        </button>
        <button className="bell"  aria-label="Notificaciones"> {/*onClick={onNotificaciones}}
          ♫{/* ♫{sinLeer > 0 && <span className="bell-badge">{sinLeer}</span>} */}
        </button>
        <button className="user-chip" > {/*nClick={onPerfil}*/}
          <span className="user-avatar">JS</span>
          <span className="user-info"><strong>{data?.data.nombre1_user}</strong><small>{data?.data.nombre_rol}</small></span>
          <span className="chevron">⌄</span>
        </button>
      </div>
    </header>
  );
}
