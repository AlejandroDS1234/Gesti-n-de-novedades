import { useMemo, useState } from "react";
import { ESTADOS, claseEstado, formatFecha } from "../../funciones generales";
import "../../css/inicio.css";

export default function MisNovedades({ novedades, onEstado, busquedaInicial }) {
  const [busqueda, setBusqueda] = useState(busquedaInicial || "");
  const [filtro, setFiltro] = useState("Todas");

  const filtradas = useMemo(() => novedades.filter((n) => {
    const texto = `${n.titulo} ${n.tipo} ${n.descripcion}`.toLowerCase();
    return texto.includes(busqueda.toLowerCase()) && (filtro === "Todas" || n.estado === filtro);
  }), [novedades, busqueda, filtro]);

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Mis reportes</h3>
          <p className="muted">Consulta y actualiza el estado de tus novedades.</p>
        </div>
        <span className="count-badge">{novedades.length} registros</span>
      </div>
      <div className="toolbar">
        <label className="search-box"><span>⌕</span>
          <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar novedad..." />
        </label>
        <select className="filter-select" value={filtro} onChange={(e) => setFiltro(e.target.value)} aria-label="Filtrar por estado">
          <option>Todas</option>
          {ESTADOS.map((e) => <option key={e}>{e}</option>)}
        </select>
      </div>
      {filtradas.length === 0 ? (
        <div className="empty-state">
          <h4>{novedades.length ? "No encontramos resultados" : "Aún no tienes novedades"}</h4>
          <p>{novedades.length ? "Prueba con otra búsqueda o cambia el filtro." : "Cuando registres una novedad, aparecerá en esta sección."}</p>
        </div>
      ) : (
        <div className="table-wrap">
          <table className="notice-table">
            <thead>
              <tr><th>Fecha</th><th>Tipo</th><th>Novedad</th><th>Prioridad</th><th>Estado</th></tr>
            </thead>
            <tbody>
              {filtradas.map((n) => (
                <tr key={n.id}>
                  <td>{formatFecha(n.fecha)}</td>
                  <td>{n.tipo}</td>
                  <td><strong>{n.titulo}</strong><span className="table-description">{n.descripcion}</span></td>
                  <td><span className={`priority ${n.prioridad.toLowerCase()}`}>{n.prioridad}</span></td>
                  <td>
                    <select className={claseEstado(n.estado)} value={n.estado}
                      onChange={(e) => onEstado(n.id, e.target.value)} aria-label={`Cambiar estado de ${n.titulo}`}>
                      {ESTADOS.map((e) => <option key={e}>{e}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
