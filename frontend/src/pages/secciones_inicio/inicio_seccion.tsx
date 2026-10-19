import { useState } from "react";
import { claseEstado, formatFecha } from "../../funciones generales";
import "../../css/inicio.css";

const mensajes = [
  "Más formación, más oportunidades.",
  "Registra tus novedades a tiempo.",
  "Tu centro te mantiene informado.",
];

export default function Inicio({ stats, novedades, cambiarPagina }) {
  const [slide, setSlide] = useState(0);
  const tarjetas = [
    { icono: "▤", numero: stats.total, texto: "Novedades registradas" },
    { icono: "✔", numero: stats.enProceso, texto: "En proceso" },
    { icono: "◉", numero: stats.respondidas, texto: "Respondidas" },
    { icono: "▣", numero: stats.vencidas, texto: "Vencidas" },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h2>¡Hola, Usuario!</h2>
          <p>Bienvenido al sistema de Gestión de Novedades del CBI Palmira.</p>
        </div>
        <div className="hero-image" aria-hidden="true" />
      </section>

      <section className="stats-grid">
        {tarjetas.map((t) => (
          <article className="stat-card" key={t.texto}>
            <span className="stat-icon">{t.icono}</span>
            <strong>{t.numero}</strong>
            <p>{t.texto}</p>
          </article>
        ))}
      </section>

      <section className="help-banner">
        <span className="help-icon">✆</span>
        <div>
          <h3>¿Qué puedes hacer aquí?</h3>
          <p>Registra novedades, consulta tu estado y mantente al tanto de las notificaciones de tu centro.</p>
        </div>
        <button className="help-arrow" onClick={() => cambiarPagina("Novedades")} aria-label="Registrar novedad">→</button>
      </section>

      <section className="home-grid">
        <article className="panel">
          <div className="panel-head">
            <h3><span className="panel-icon">▤</span> Últimas novedades</h3>
            <button className="link-btn" onClick={() => cambiarPagina("Mis reportes")}>Ver todas →</button>
          </div>
          {novedades.length === 0 ? (
            <div className="empty-state">
              <h4>Aún no hay novedades</h4>
              <p>Registra tu primera novedad y aparecerá aquí.</p>
              <button className="btn-primary" onClick={() => cambiarPagina("Novedades")}>Registrar novedad</button>
            </div>
          ) : (
            <div className="table-wrap">
              <table className="notice-table">
                <thead>
                  <tr><th>Fecha</th><th>Tipo</th><th>Estado</th><th>Descripción</th></tr>
                </thead>
                <tbody>
                  {novedades.slice(0, 4).map((n) => (
                    <tr key={n.id}>
                      <td>{formatFecha(n.fecha)}</td>
                      <td>{n.tipo}</td>
                      <td><span className={claseEstado(n.estado)}>{n.estado}</span></td>
                      <td>{n.descripcion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </article>

        <aside className="promo">
          <p className="promo-slogan">La formación<br />nos impulsa</p>
          <div className="promo-card">
            <span className="promo-icon">✦</span>
            <div><strong>CBI Palmira</strong><small>{mensajes[slide]}</small></div>
          </div>
          <div className="dots">
            {mensajes.map((_, i) => (
              <button key={i} className={i === slide ? "dot active" : "dot"}
                onClick={() => setSlide(i)} aria-label={`Mensaje ${i + 1}`} />
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
