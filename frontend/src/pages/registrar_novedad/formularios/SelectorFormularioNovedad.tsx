import { useState } from "react";
import { CampoFormulario, FormularioNovedad } from "./componentes_comunes";
import { catalogoTiposNovedad } from "./catalogo_tipos_novedades";
import { useSesion } from "../../../api/sesion";

export default function SelectorFormularioNovedad() {
  const { data: id_rol } = useSesion(["id_rol"])
  const tipoInicial = {
    id: "-1",
    nombre: "Ingrese...",
    descripcion:
      "Ingresa un tipo de novedad",
    campos_independientes: [],
    categorias: []
  };
  const categoriaInicial = {
    id: "-1",
    nombre: "Elegir...",
    descripcion:
      "Ingrese una categoria de la novedad",
    campos: []
  }

  const [tipoId, setTipoId] = useState(tipoInicial.id);
  const [novedadId, setNovedadId] = useState(null);

  const TiposRol = catalogoTiposNovedad.find((tipo) => tipo.id === `${id_rol?.data.id_rol}`);
  const tipoActual =
    TiposRol?.Tipos_novedad.find((tipo) => tipo.id === tipoId) ?? tipoInicial;
  const categoriaActual =
    novedadId?
    tipoActual?.categorias.find((novedad) => novedad.id === novedadId) ?? categoriaInicial : null;

  return (
    <div className="notice-form">
      <div className="form-grid">
        <label className="field field-wide">
          <p>
            <span className="required">*</span> Tipo de novedad
          </p>
          <select
            value={tipoId}
            onChange={(event) => {
              const nuevaTipo = TiposRol?.Tipos_novedad.find((tipo) => tipo.id === event.target.value) ?? tipoInicial;
              setTipoId(nuevaTipo.id);
              setNovedadId(-1);
            }}
          >
            <option value={tipoInicial.id}>{tipoInicial.nombre}</option>
            {TiposRol?.Tipos_novedad.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </label>
        { tipoActual?.categorias.length > 0 && (
        <label className="field field-wide">
          <p>
            <span className="required">*</span> Categoría o caso
          </p>
          <select
            value={novedadId}
            onChange={(event) => setNovedadId(event.target.value)}
          >
            {tipoActual?.categorias.map((novedad) => (
              <option key={novedad.id} value={novedad.id}>
                {novedad.nombre}
              </option>
            ))}
            <option value={categoriaInicial.id}>
              {categoriaInicial.nombre}
            </option>
          </select>
        </label>)
        }
      </div>

      <div className="info-banner" style={{ marginTop: 18 }}>
        {tipoActual?.nombre}{categoriaActual?.id > 0 ? " · " + categoriaActual.nombre : ""}
      </div>

      <FormularioNovedad ariaLabel={`Formulario de novedad: ${tipoActual.nombre} - ${categoriaActual?.nombre ?? "Sin categoría"}`}>
        {tipoActual?.campos_independientes.length > 0 && tipoActual?.campos_independientes.map((campo) => (
          <CampoFormulario key={campo.nombre} campo={campo} />
        ))}

        {categoriaActual && categoriaActual.campos.map((campo) => (
          <CampoFormulario key={campo.nombre} campo={campo} />
        ))}
      </FormularioNovedad>
    </div>
  );
}
