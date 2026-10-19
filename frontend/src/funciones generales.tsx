export function formatFecha(iso: string) {
  const [a, m, d] = iso.split("-");
  return `${d}/${m}/${a}`;
}

export function claseEstado(estado: string) {
  return `tag ${estado.toLowerCase().replaceAll(" ", "-")}`;
}

export const ESTADOS = ["Registrada", "En proceso", "Respondida", "Vencida"];