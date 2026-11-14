import { useQuery } from "@tanstack/react-query";
import { useSesion } from "./sesion";

async function apiTiposNovedadesRol() {
  let promesa = await fetch("/api/tipos_novedad_rol", {
    method: "GET",
    headers: {},
  });
  let respuesta = await promesa.json();
  return respuesta;
}

export function useTiposNovedadesRol() {
  const { data: id_rol } = useSesion(["id_rol"]);
  return useQuery({
    queryKey: ["tipos_novedades_rol", id_rol],
    queryFn: () => apiTiposNovedadesRol(),
  });
}
