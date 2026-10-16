import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function cerrarSesionQuery() {
  return fetch("/api/cerrar_sesion", {
    method: "POST",
  }).then((res) => res.json());
}

function Boton_cerrar_sesion() {
  const navigate = useNavigate();
  const { mutate: cerrarSesion } = useMutation({
    mutationFn: cerrarSesionQuery,
    onSuccess: (data) => {
      if (data.success) {
        navigate(data.redirigir || "/login");
      } else {
        console.error("Error al cerrar sesión:", data.message);
      }
    },
  });
  return <button onClick={() => cerrarSesion()}>Cerrar Sesión</button>;
}

export default Boton_cerrar_sesion;