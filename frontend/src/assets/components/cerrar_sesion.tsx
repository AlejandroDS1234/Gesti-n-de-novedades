import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

function cerrarSesionQuery() {
  return fetch("/api/cerrar_sesion", {
    method: "POST",
  }).then((res) => res.json());
}


interface CerrarSesionArgs {
  cerrarSesion: () => void;
  isPending: boolean;
}


interface CerrarSesionProviderProps {
  children: (args: CerrarSesionArgs) => ReactNode;
}

function CerrarSesionProvider({ children }: CerrarSesionProviderProps) {
  const navigate = useNavigate();
  const { mutate: cerrarSesion, isPending } = useMutation({
    mutationFn: cerrarSesionQuery,
    onSuccess: (data) => {
      if (data.success) {
        navigate(data.redirigir || "/login");
      } else {
        console.error("Error al cerrar sesión:", data.message);
      }
    },
  });
  return children({ cerrarSesion, isPending });
}

export default CerrarSesionProvider;