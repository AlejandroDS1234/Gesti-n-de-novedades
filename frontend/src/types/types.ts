export type respuestaBackend = {
  success: boolean;
  data?: object;
  message: string;
  code: number;
  redirigir?: string;
};
