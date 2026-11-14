import type { ReactNode } from "react";
import type { CampoNovedad } from "./catalogo_tipos_novedades";

export function FormularioNovedad({
  ariaLabel,
  children,
}: {
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <form className="notice-form" aria-label={ariaLabel}>
      <div className="form-grid">{children}</div>
    </form>
  );
}

export function CampoFormulario({ campo }: { campo: CampoNovedad }) {
  const clase = campo.ancho || campo.tipo === "textarea" ? "field field-wide" : "field";
  const requerido = campo.requerido ?? false;

  return (
    <label className={clase}>
      <p>
        {requerido ? <span className="required">*</span> : null} {campo.etiqueta}
      </p>
      {campo.tipo === "textarea" ? (
        <textarea
          name={campo.nombre}
          placeholder={campo.placeholder}
          required={requerido}
        />
      ) : campo.tipo === "select" ? (
        <select name={campo.nombre} required={requerido} defaultValue="">
          <option value="">Seleccionar...</option>
          {campo.opciones?.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={campo.tipo}
          name={campo.nombre}
          placeholder={campo.placeholder}
          required={requerido}
        />
      )}
    </label>
  );
}
