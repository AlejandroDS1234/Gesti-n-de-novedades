export type respuestaBackend = {
  success: boolean;
  data?: object;
  message: string;
  code: number;
  redirigir?: string;
};

export type usuario = {
  identi_user: string;
  tipo_id_user: string;
  nombre1_user: string;
  nombre2_user: string;
  apellido1_user: string;
  apellido2_user: string;
  fecha_naci_user: string;
  genero_user: string;
  correo_user: string;
  estado_user: string;
  id_rol: string;
  nombre_rol: string;
};
