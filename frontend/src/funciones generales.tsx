import { useNavigate } from "react-router-dom";
import type { respuestaBackend } from "./types/types";

export function formatFecha(iso: string) {
  const [a, m, d] = iso.split("-");
  return `${d}/${m}/${a}`;
}

export function claseEstado(estado: string) {
  return `tag ${estado.toLowerCase().replaceAll(" ", "-")}`;
}

export const ESTADOS = ["Registrada", "En proceso", "Respondida", "Vencida"];

export function useRedirigir() {
  const navigate = useNavigate();

  return (datos: respuestaBackend) => {
  if (!datos.redirigir) return;
  navigate(datos.redirigir, { state: { mensaje: datos.message, respuesta: datos } });
  };
}