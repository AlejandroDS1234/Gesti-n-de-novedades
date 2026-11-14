export type CampoNovedad = {
  nombre: string;
  etiqueta: string;
  tipo: "text" | "date" | "time" | "email" | "number" | "textarea" | "select";
  requerido?: boolean;
  opciones?: {
    id: string;
    nombre: string;
  }[];
  ancho?: boolean;
  placeholder?: string;
};

export type CategoriaTipoNovedad = {
  id: string;
  nombre: string;
  descripcion: string;
  categorias: {
    id: string;
    nombre: string;
    descripcion: string;
    campos: CampoNovedad[];
  }[];
  campos_independientes: CampoNovedad[];
};

export type TiposPorRol = {
  id: string;
  nombre: string;
  Tipos_novedad: CategoriaTipoNovedad[];
};

export const catalogoTiposNovedad: TiposPorRol[] = [
  {
    id: "1",
    nombre: "Aprendiz",
    Tipos_novedad: [
      {
        id: "ambiente",
        nombre: "Ambiente",
        descripcion: "Cambios relacionados con el ambiente",
        campos_independientes: [
          {
            nombre: "ficha",
            etiqueta: "Ficha",
            tipo: "text",
            requerido: true,
          },
        ],
        categorias: [],
      },
    ],
  },
  {
    id: "2",
    nombre: "Instructor",
    Tipos_novedad: [
      {
        id: "ambiente",
        nombre: "Ambiente",
        descripcion: "Cambios relacionados con el ambiente",
        campos_independientes: [
          {
            nombre: "ficha",
            etiqueta: "Ficha",
            tipo: "text",
            requerido: true,
          },
        ],
        categorias: [],
      },
      {
        id: "programacion_formacion",
        nombre: "Programación de la formación",
        descripcion:
          "Cambios relacionados con horarios, ambientes, sesiones y actividades de la formación.",
        campos_independientes: [],
        categorias: [
          {
            id: "cambio_ambiente",
            nombre: "Cambio de ambiente",
            descripcion:
              "Ficha, fecha, ambiente original, ambiente nuevo y motivo.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "ambiente_original",
                etiqueta: "Ambiente original",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "ambiente_nuevo",
                etiqueta: "Ambiente nuevo",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "motivo",
                etiqueta: "Motivo",
                tipo: "textarea",
                requerido: true,
              },
            ],
          },
          {
            id: "cambio_horario",
            nombre: "Cambio de horario",
            descripcion: "Ficha, fecha, horario original y horario nuevo.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "hora_inicio_original",
                etiqueta: "Hora de inicio original",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_fin_original",
                etiqueta: "Hora de finalización original",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_inicio_nueva",
                etiqueta: "Nueva hora de inicio",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_fin_nueva",
                etiqueta: "Nueva hora de finalización",
                tipo: "time",
                requerido: true,
              },
            ],
          },
          {
            id: "adelanto_formacion",
            nombre: "Adelanto de formación",
            descripcion:
              "Ficha, fecha original, fecha nueva, horario y ambiente.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha_original",
                etiqueta: "Fecha original",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "fecha_nueva",
                etiqueta: "Fecha nueva",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "hora_inicio",
                etiqueta: "Hora de inicio",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_fin",
                etiqueta: "Hora de finalización",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "ambiente",
                etiqueta: "Ambiente",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "reprogramacion_reposicion",
            nombre: "Reprogramación o reposición de sesión",
            descripcion:
              "Ficha, sesión que se repone, nueva fecha, horario y ambiente.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "sesion_reponer",
                etiqueta: "Sesión que se repone",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "nueva_fecha",
                etiqueta: "Nueva fecha",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "hora_inicio",
                etiqueta: "Hora de inicio",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_fin",
                etiqueta: "Hora de finalización",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "ambiente",
                etiqueta: "Ambiente",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "cancelacion_sesion",
            nombre: "Cancelación de sesión",
            descripcion: "Ficha, fecha, motivo y si habrá reposición.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha de la sesión",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "motivo",
                etiqueta: "Motivo de la cancelación",
                tipo: "textarea",
                requerido: true,
              },
              {
                nombre: "habra_reposicion",
                etiqueta: "¿Habrá reposición?",
                tipo: "select",
                requerido: true,
                opciones: [
                  {
                    id: "1",
                    nombre: "Si",
                  },
                  {
                    id: "2",
                    nombre: "No",
                  },
                ],
              },
            ],
          },
          {
            id: "cambio_modalidad",
            nombre: "Cambio de modalidad",
            descripcion: "Ficha, fecha, modalidad nueva y enlace o plataforma.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "modalidad_nueva",
                etiqueta: "Nueva modalidad",
                tipo: "select",
                requerido: true,
                opciones: [
                  {
                    id: "1",
                    nombre: "Presencial",
                  },
                  {
                    id: "2",
                    nombre: "Virtual",
                  },
                ],
              },
              {
                nombre: "enlace_plataforma",
                etiqueta: "Enlace o plataforma",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "formacion_fuera_centro",
            nombre: "Formación fuera del centro",
            descripcion: "Ficha, fecha, lugar y horario.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha de la actividad",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "lugar",
                etiqueta: "Lugar de la actividad",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "hora_inicio",
                etiqueta: "Hora de inicio",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_fin",
                etiqueta: "Hora de finalización",
                tipo: "time",
                requerido: true,
              },
            ],
          },
        ],
      },
      {
        id: "ausencia_instructor",
        nombre: "Ausencia o disponibilidad del instructor",
        descripcion:
          "Situaciones de inasistencia, permisos, incapacidades, llegadas tardías y otros casos relacionados con la disponibilidad del instructor.",
        campos_independientes: [],
        categorias: [
          {
            id: "inasistencia",
            nombre: "Inasistencia",
            descripcion: "Fichas afectadas y motivo.",
            campos: [
              {
                nombre: "fichas_afectadas",
                etiqueta: "Fichas afectadas",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "motivo",
                etiqueta: "Motivo",
                tipo: "textarea",
                requerido: true,
              },
            ],
          },
          {
            id: "llegada_tarde_salida_anticipada",
            nombre: "Llegada tarde o salida anticipada",
            descripcion: "Ficha, hora real de llegada o salida.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "hora_real",
                etiqueta: "Hora real de llegada o salida",
                tipo: "time",
                requerido: true,
              },
            ],
          },
          {
            id: "atencion_parcial",
            nombre: "Atención parcial de la jornada",
            descripcion: "Ficha y rango de horas en que sí atiende.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "hora_inicio",
                etiqueta: "Hora de inicio de atención",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_fin",
                etiqueta: "Hora de finalización de atención",
                tipo: "time",
                requerido: true,
              },
            ],
          },
          {
            id: "incapacidad_medica",
            nombre: "Incapacidad médica",
            descripcion: "Fichas afectadas, días y requiere soporte.",
            campos: [
              {
                nombre: "fichas_afectadas",
                etiqueta: "Fichas afectadas",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "dias",
                etiqueta: "Días",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "requiere_soporte",
                etiqueta: "¿Requiere soporte?",
                tipo: "select",
                requerido: true,
                opciones: [
                  {
                    id: "1",
                    nombre: "Si",
                  },
                  {
                    id: "2",
                    nombre: "No",
                  },
                ],
              },
            ],
          },
          {
            id: "permiso_licencia",
            nombre: "Permiso o licencia",
            descripcion: "Fichas afectadas y tipo de permiso.",
            campos: [
              {
                nombre: "fichas_afectadas",
                etiqueta: "Fichas afectadas",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "tipo_permiso",
                etiqueta: "Tipo de permiso",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "comision_capacitacion",
            nombre: "Comisión o capacitación institucional",
            descripcion: "Fichas afectadas y evento o actividad.",
            campos: [
              {
                nombre: "fichas_afectadas",
                etiqueta: "Fichas afectadas",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "evento_actividad",
                etiqueta: "Evento o actividad",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "calamidad_domestica",
            nombre: "Calamidad doméstica o fuerza mayor",
            descripcion: "Fichas afectadas y motivo.",
            campos: [
              {
                nombre: "fichas_afectadas",
                etiqueta: "Fichas afectadas",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "motivo",
                etiqueta: "Motivo",
                tipo: "textarea",
                requerido: true,
              },
            ],
          },
        ],
      },
      {
        id: "reemplazos",
        nombre: "Reemplazos",
        descripcion:
          "Solicitudes y acuerdos de reemplazo entre instructores o entre sesiones.",
        campos_independientes: [],
        categorias: [
          {
            id: "solicitud_reemplazo",
            nombre: "Solicitud de reemplazo",
            descripcion:
              "Ficha, fecha, horario y competencia o resultado de aprendizaje.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "hora_inicio",
                etiqueta: "Hora de inicio",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "hora_fin",
                etiqueta: "Hora de finalización",
                tipo: "time",
                requerido: true,
              },
              {
                nombre: "competencia_resultado",
                etiqueta: "Competencia o resultado de aprendizaje",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "reemplazo_acordado",
            nombre: "Reemplazo acordado con otro instructor",
            descripcion: "Ficha, fecha e instructor reemplazante.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "instructor_reemplazante",
                etiqueta: "Instructor reemplazante",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "intercambio_sesiones",
            nombre: "Intercambio de sesiones entre instructores",
            descripcion: "Fichas, fechas e instructor con quien intercambia.",
            campos: [
              {
                nombre: "fichas",
                etiqueta: "Fichas",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fechas",
                etiqueta: "Fechas",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "instructor_intercambio",
                etiqueta: "Instructor con quien intercambia",
                tipo: "text",
                requerido: true,
              },
            ],
          },
        ],
      },
      {
        id: "situaciones_grupo",
        nombre: "Situaciones con el grupo",
        descripcion:
          "Inasistencias grupales, incidentes de convivencia y emergencias durante la formación.",
        campos_independientes: [],
        categorias: [
          {
            id: "inasistencia_masiva",
            nombre: "Inasistencia masiva o grupal de aprendices",
            descripcion: "Ficha, fecha y cantidad de aprendices.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "fecha",
                etiqueta: "Fecha",
                tipo: "date",
                requerido: true,
              },
              {
                nombre: "cantidad_aprendices",
                etiqueta: "Cantidad de aprendices",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "situacion_disciplinaria",
            nombre: "Situación disciplinaria o de convivencia",
            descripcion: "Ficha y aprendices involucrados.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "aprendices_involucrados",
                etiqueta: "Aprendices involucrados",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "accidente_emergencia",
            nombre: "Accidente o emergencia en formación",
            descripcion: "Ficha, ambiente y aprendices involucrados.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "ambiente",
                etiqueta: "Ambiente",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "aprendices_involucrados",
                etiqueta: "Aprendices involucrados",
                tipo: "text",
                requerido: true,
              },
            ],
          },
        ],
      },
      {
        id: "recursos_formacion",
        nombre: "Recursos para la formación",
        descripcion:
          "categorias relacionadas con materiales, plataformas, conectividad o fallas de recursos necesarios para la formación.",
        campos_independientes: [],
        categorias: [
          {
            id: "falta_materiales",
            nombre: "Falta de materiales o insumos",
            descripcion: "Ficha y recurso faltante.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "recurso_faltante",
                etiqueta: "Recurso faltante",
                tipo: "text",
                requerido: true,
              },
            ],
          },
          {
            id: "falla_plataforma",
            nombre: "Falla de plataforma o conectividad",
            descripcion: "Ficha y plataforma afectada.",
            campos: [
              {
                nombre: "ficha",
                etiqueta: "Ficha",
                tipo: "text",
                requerido: true,
              },
              {
                nombre: "plataforma_afectada",
                etiqueta: "Plataforma afectada",
                tipo: "text",
                requerido: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const datosMock = {
  fichas: ["2445001", "2445002", "2445003", "2445004"],
  ambientes: ["Aula 101", "Aula 202", "Laboratorio 1", "Sala de cómputo"],
  instructores: ["Ana García", "Luis Pérez", "Marta Díaz", "Camilo Torres"],
  aprendices: ["Aprendiz 1", "Aprendiz 2", "Aprendiz 3", "Aprendiz 4"],
  horarios: ["07:00 - 11:00", "09:00 - 13:00", "13:00 - 17:00"],
  plataformas: ["Plataforma SENA", "Teams", "Zoom", "Google Meet"],
};
