import "../../css/inicio.css";

export default function Perfil({ total }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Perfil</h3>
          <p className="muted">Información de la cuenta.</p>
        </div>
      </div>
      <div className="profile">
        <span className="profile-avatar">JS</span>
        <div>
          <h4>Javier Steven Solis</h4>
          <p className="muted">Aprendiz · CBI Palmira</p>
          <p className="muted">Novedades registradas: <strong>{total}</strong></p>
        </div>
      </div>
    </section>
  );
}
