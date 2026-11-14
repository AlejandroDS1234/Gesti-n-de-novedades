import "../../css/inicio.css";
import SelectorFormularioNovedad from "./formularios/SelectorFormularioNovedad";

export default function NuevaNovedad() {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Registrar novedad</h3>
          <p className="muted">Describe la situación con información clara y precisa.</p>
        </div>
        <span className="required-note"><i /> Campos obligatorios</span>
      </div>

      <SelectorFormularioNovedad />

      <div className="info-banner">
        Esta versión usa datos de prueba del frontend para visualizar y validar los formularios sin depender del backend.
      </div>
    </section>
  );
}
