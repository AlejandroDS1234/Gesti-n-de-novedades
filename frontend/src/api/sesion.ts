import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { usuario } from "../types/types";
import { useRedirigir } from "../funciones generales";

type CampoUsuario = keyof usuario;
type ListaCamposUsuario = [CampoUsuario, ...CampoUsuario[]];

async function apiSesion(datos_pedidos?: ListaCamposUsuario) {
  let dictFetch: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (datos_pedidos) {
    dictFetch.body = JSON.stringify(datos_pedidos);
  }
  let promesa = await fetch("/api/sesion", dictFetch);
  let respuesta = await promesa.json();
  return respuesta;
}

export function useSesion(datos_pedidos?: ListaCamposUsuario) {
  return useQuery({
    queryKey: ["sesion", datos_pedidos ?? ["identi_user"]],
    queryFn: () => apiSesion(datos_pedidos),
    staleTime: 1000 * 60 * 5,
  });
}

function cerrarSesionQuery() {
  return fetch("/api/cerrar_sesion", {
    method: "POST",
  }).then((res) => res.json());
}

export function useCerrarSesion() {
  const redirigir = useRedirigir();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cerrarSesionQuery,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.clear();
        redirigir(data);
      } else {
        console.error("Error al cerrar sesión:", data.message);
      }
    },
  });
}
