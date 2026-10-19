import { useState } from "react";
import "../../css/inicio.css";

const inicial = { titulo: "", tipo: "Solicitud", prioridad: "Media", descripcion: "" };

export default function NuevaNovedad({ onGuardar }) {
  const [formulario, setFormulario] = useState(inicial);
  const [error, setError] = useState("");

  function cambiar(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
    setError("");
  }

  function enviar(e) {
    e.preventDefault();
    if (!formulario.titulo.trim() || !formulario.descripcion.trim()) {
      setError("Completa el título y la descripción antes de guardar.");
      return;
    }
    onGuardar({
      ...formulario,
      titulo: formulario.titulo.trim(),
      descripcion: formulario.descripcion.trim(),
      fecha: new Date().toISOString().slice(0, 10),
    });
    setFormulario(inicial);
  }

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Registrar novedad</h3>
          <p className="muted">Describe la situación con información clara y precisa.</p>
        </div>
        <span className="required-note"><i /> Campos obligatorios</span>
      </div>
      <form className="notice-form" onSubmit={enviar}>
        <div className="form-grid">
          <label className="field field-wide">Título de la novedad <span className="required">*</span>
            <input name="titulo" value={formulario.titulo} onChange={cambiar}
              placeholder="Ej. Solicitud de mantenimiento" maxLength={100} />
          </label>
          <label className="field">Tipo
            <select name="tipo" value={formulario.tipo} onChange={cambiar}>
              <option>Solicitud</option><option>Reporte</option>
            </select>
          </label>
          <label className="field">Prioridad
            <select name="prioridad" value={formulario.prioridad} onChange={cambiar}>
              <option>Baja</option><option>Media</option><option>Alta</option>
            </select>
          </label>
          <label className="field field-wide">Descripción <span className="required">*</span>
            <textarea name="descripcion" value={formulario.descripcion} onChange={cambiar}
              placeholder="Explica qué sucedió, dónde y qué seguimiento se necesita..." rows="6" maxLength={1200} />
            <span className="field-hint">{formulario.descripcion.length}/1200 caracteres</span>
          </label>
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => { setFormulario(inicial); setError(""); }}>Limpiar</button>
          <button type="submit" className="btn-primary">Guardar novedad</button>
        </div>
      </form>
      <div className="info-banner">Esta versión guarda los registros en el almacenamiento local de este navegador. Todavía no está conectada a un backend.</div>
    </section>
  );
}
