import { claseEstado, formatFecha } from "../../funciones generales";
import "../../css/inicio.css";

export default function Notificaciones({ lista, onBorrar }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Notificaciones</h3>
          <p className="muted">Se crean cuando registras una novedad o cambias su estado.</p>
        </div>
        <div className="head-actions">
          <span className="count-badge">{lista.length} avisos</span>
          {lista.length > 0 && <button className="btn-secondary small" onClick={onBorrar}>Borrar todas</button>}
        </div>
      </div>
      {lista.length === 0 ? (
        <div className="empty-state">
          <h4>No tienes notificaciones</h4>
          <p>Cuando registres una novedad o cambies su estado, aparecerá un aviso aquí.</p>
        </div>
      ) : (
        <div className="notif-list">
          {lista.map((n) => (
            <article className="notif-item" key={n.id}>
              <span className="notif-icon">✉</span>
              <div className="notif-body">
                <div className="notif-title">
                  <h4>{n.titulo}</h4>
                  <span className={claseEstado(n.estado)}>{n.estado}</span>
                </div>
                <p>{n.descripcion}</p>
                <small>{formatFecha(n.fecha)}</small>
              </div>
            </article>
          ))}
        </div>
      )}
      <div className="info-banner">Los datos se guardan en este navegador. Todavía no están conectados a un backend.</div>
    </section>
  );
}
