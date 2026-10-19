import { useEffect, useMemo, useState } from "react";
import Sidebar from "../assets/components/Sidebar.tsx";
import Header from "../assets/components/Header.tsx";
import Inicio from "./secciones_inicio/inicio_seccion.tsx";
import NuevaNovedad from "./secciones_inicio/NuevaNovedad.tsx";
import MisNovedades from "./secciones_inicio/MisNovedades.tsx";
import Notificaciones from "./secciones_inicio/Notificaciones.tsx";
import Perfil from "./secciones_inicio/Perfil.tsx";
import "../css/inicio.css";

const NOVEDADES_KEY = "cbi-novedades-v3";
const NOTIFICACIONES_KEY = "cbi-notificaciones-v3";
const TEMA_KEY = "cbi-tema";

function leer(clave, valorInicial) {
  try {
    return JSON.parse(localStorage.getItem(clave) || "null") || valorInicial;
  } catch {
    return valorInicial;
  }
}

function InicioPrincipal() {
  const [pagina, setPagina] = useState("Inicio");
  const [busqueda, setBusqueda] = useState("");
  const [novedades, setNovedades] = useState(() => leer(NOVEDADES_KEY, []));
  const [notificaciones, setNotificaciones] = useState(() => leer(NOTIFICACIONES_KEY, []));
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem(TEMA_KEY) || "oscuro";
    } catch {
      return "oscuro";
    }
  });

  useEffect(() => {
    localStorage.setItem(NOVEDADES_KEY, JSON.stringify(novedades));
  }, [novedades]);

  useEffect(() => {
    localStorage.setItem(NOTIFICACIONES_KEY, JSON.stringify(notificaciones));
  }, [notificaciones]);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    localStorage.setItem(TEMA_KEY, tema);
  }, [tema]);

  // Al abrir Notificaciones, todas pasan a leídas.
  useEffect(() => {
    if (pagina === "Notificaciones" && notificaciones.some((n) => !n.leida)) {
      setNotificaciones((actuales) => actuales.map((n) => ({ ...n, leida: true })));
    }
  }, [pagina, notificaciones]);

  const stats = useMemo(() => ({
    total: novedades.length,
    enProceso: novedades.filter((n) => n.estado === "En proceso").length,
    respondidas: novedades.filter((n) => n.estado === "Respondida").length,
    vencidas: novedades.filter((n) => n.estado === "Vencida").length,
  }), [novedades]);

  const sinLeer = notificaciones.filter((n) => !n.leida).length;

  function crearNotificacion(titulo, descripcion, estado) {
    return {
      id: `NOT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      titulo, descripcion, estado,
      fecha: new Date().toISOString().slice(0, 10),
      leida: false,
    };
  }

  function agregarNovedad(nueva) {
    setNovedades((actuales) => [
      { ...nueva, id: `NOV-${Date.now()}`, estado: "Registrada" },
      ...actuales,
    ]);
    setNotificaciones((actuales) => [
      crearNotificacion("Novedad registrada", `Registraste: ${nueva.titulo}`, "Registrada"),
      ...actuales,
    ]);
    setBusqueda("");
    setPagina("Mis reportes");
  }

  function actualizarEstado(id, estado) {
    const novedad = novedades.find((n) => n.id === id);
    setNovedades((actuales) =>
      actuales.map((n) => (n.id === id ? { ...n, estado } : n))
    );
    if (novedad) {
      setNotificaciones((actuales) => [
        crearNotificacion("Estado actualizado", `"${novedad.titulo}" pasó a ${estado}.`, estado),
        ...actuales,
      ]);
    }
  }

  function buscar(texto) {
    setBusqueda(texto);
    setPagina("Mis reportes");
  }

  const secciones = ["Inicio", "Novedades", "Mis reportes", "Notificaciones", "Perfil"];

  return (
    <div className="app-shell">
      <Sidebar pagina={pagina} cambiarPagina={setPagina} sinLeer={sinLeer} />
      <main className="main-area">
        <Header onBuscar={buscar} sinLeer={sinLeer} tema={tema}
          onTema={() => setTema(tema === "oscuro" ? "claro" : "oscuro")}
          onNotificaciones={() => setPagina("Notificaciones")} onPerfil={() => setPagina("Perfil")} />
        <div className="page-content">
          <nav className="mobile-tabs" aria-label="Secciones">
            {secciones.map((item) => (
              <button key={item} className={pagina === item ? "mobile-tab active" : "mobile-tab"}
                onClick={() => setPagina(item)}>{item}</button>
            ))}
          </nav>

          {pagina === "Inicio" && <Inicio stats={stats} novedades={novedades} cambiarPagina={setPagina} />}
          {pagina === "Novedades" && <NuevaNovedad onGuardar={agregarNovedad} />}
          {pagina === "Mis reportes" && (
            <MisNovedades key={busqueda} busquedaInicial={busqueda} novedades={novedades} onEstado={actualizarEstado} />
          )}
          {pagina === "Notificaciones" && (
            <Notificaciones lista={notificaciones} onBorrar={() => setNotificaciones([])} />
          )}
          {pagina === "Perfil" && <Perfil total={stats.total} />}
        </div>
      </main>
    </div>
  );
}

export default InicioPrincipal;

