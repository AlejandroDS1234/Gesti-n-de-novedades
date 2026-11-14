import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import RutasProtegidas from "./rutasProtegidas";
import Index from "../pages/PageIndex";
import Login from "../pages/login";
import Inicio from "../pages/secciones_inicio/inicio_seccion.tsx";
import RegistAdmin from "../pages/regist_admin";
import NuevaNovedad from "../pages/registrar_novedad/registrar_novedad";
import BaseInstructor from "./BaseInstructor";
import BaseAprendiz from "./BaseAprendiz";
import BaseAdministrador from "./BaseAdministrador"

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RutasProtegidas rutaVerificar="/sesion" />}>
                <Route path="/instructor" element={<BaseInstructor />}>
                    <Route index element={<Navigate to="inicio" replace />} />
                    <Route path="inicio" element={<Inicio />}/>
                    <Route path="nueva_novedad" element={<NuevaNovedad />} />
                </Route>
                <Route path="/aprendiz" element={<BaseAprendiz/>}>
                    <Route index element={<Navigate to="inicio" replace />} />
                    <Route path="inicio" element={<Inicio />}/>
                    <Route path="nueva_novedad" element={<NuevaNovedad />} />
                </Route>
                <Route path="/administrador" element={<BaseAdministrador/>}>
                    <Route index element={<Navigate to="inicio" replace />} />
                    <Route path="inicio" element={<RegistAdmin />} />
                </Route>
            </Route>
        </ReactRoutes>
    )
}

export default Routes; 