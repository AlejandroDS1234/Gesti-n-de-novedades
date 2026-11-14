import { useLocation, useNavigate } from "react-router-dom"; 
import { useCerrarSesion } from "../../api/sesion";

type Sidebarprops = {
    opciones: { nombre: string; icono: string; pagina: string }[];
    children?: React.ReactNode;
}
 
export default function Sidebar({ opciones, children }:  Sidebarprops ) {
  const { mutate: cerrarSesion, isPending } = useCerrarSesion()
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
    <div className="sidebar"/>
    <aside className="sidebar fixed">
      <div className="brand">
        <div className="sena-logo">SENA</div>
        <h1>CBI Palmira</h1>
        <p>Centro de Biotecnología Industrial</p>
      </div>
      {children}
      <nav className="side-nav">
        {opciones.map((op) => (
          <button key={op.nombre}
            className={op.pagina === pathname ? "nav-item active" : "nav-item"}
            onClick={() => navigate(op.pagina)}>
            <span className="nav-icon">{op.icono}</span>
            <span>{op.nombre}</span>
          </button>
        ))}
      </nav>
        <button className="nav-item logout" onClick={() => {
          const confirmacio = confirm("¿Estás seguro de que deseas cerrar sesión?");
          if (!confirmacio) return;
          cerrarSesion()
          }} disabled={isPending}>
          <span className="nav-icon">⇥</span>
          <span>{isPending ? "Cerrando sesión..." : "Cerrar sesión"}</span>
        </button>
    </aside>
    </>
  );
}
