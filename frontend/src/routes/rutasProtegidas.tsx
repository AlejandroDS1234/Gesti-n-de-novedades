import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"
import type { respuestaBackend } from "../types/types"

function RutasProtegidasHook(rutaVerificar: string) {
    return useQuery({
        queryKey: ["verificarRuta", rutaVerificar],
        queryFn: async () => {
            return fetch(`/api${rutaVerificar}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json() as Promise<respuestaBackend>)
        }
})
}

function RutasProtegidas({ rutaVerificar }: { rutaVerificar: string }) {
    const { data, isLoading, isError } = RutasProtegidasHook(rutaVerificar)
    if (isLoading) {
        return <div>Cargando...</div>
    }
    if (isError) {
        return <div>Error al cargar los datos</div>
    }
    return data?.success ? <Outlet /> : <Navigate to={data?.redirigir || "/login"} />
}

export default RutasProtegidas