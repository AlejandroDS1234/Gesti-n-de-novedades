import CerrarSesionProvider from "./cerrar_sesion";

const opciones = [
  { nombre: "Inicio", icono: "⌂" },
  { nombre: "Novedades", icono: "✎" },
  { nombre: "Mis reportes", icono: "▤" },
  { nombre: "Notificaciones", icono: "✉" },
  { nombre: "Perfil", icono: "☺" },
];

export default function Sidebar({ pagina, cambiarPagina, sinLeer }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="sena-logo">SENA</div>
        <h1>CBI Palmira</h1>
        <p>Centro de Biotecnología Industrial</p>
      </div>
      <nav className="side-nav">
        {opciones.map((op) => (
          <button key={op.nombre}
            className={pagina === op.nombre ? "nav-item active" : "nav-item"}
            onClick={() => cambiarPagina(op.nombre)}>
            <span className="nav-icon">{op.icono}</span>
            <span>{op.nombre}</span>
            {op.nombre === "Notificaciones" && sinLeer > 0 && <span className="nav-badge">{sinLeer}</span>}
          </button>
        ))}
      </nav>
      <CerrarSesionProvider>
        {({ cerrarSesion, isPending }) => (
          <button className="nav-item logout" onClick={() => {
            const confirmacio = confirm("¿Estás seguro de que deseas cerrar sesión?");
            if (!confirmacio) return;
            cerrarSesion()
            }} disabled={isPending}>
            <span className="nav-icon">⇥</span>
            <span>{isPending ? "Cerrando sesión..." : "Cerrar sesión"}</span>
          </button>)}
      </CerrarSesionProvider>
    </aside>
  );
}
