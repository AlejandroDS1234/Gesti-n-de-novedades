import { Route, Routes as ReactRoutes } from "react-router-dom";
import RutasProtegidas from "./rutasProtegidas";
import Index from "../pages/PageIndex";
import Login from "../pages/login";
import Inicio from "../pages/inicio";

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RutasProtegidas rutaVerificar="/sesion" />}>
                <Route element={<Inicio />} > {/* Estas rutas son provicionales, despues se pueden borrar o adaptar */}
                    <Route path="/inicio_aprendiz" element={<p>Inicio Aprendiz</p>} />
                    <Route path="/inicio_instructor" element={<p>Inicio Instructor</p>} />
                    <Route path="/inicio_coordinador" element={<p>Inicio coordinador</p>} />
                </Route >
            </Route>
        </ReactRoutes>
    )
}

export default Routes;