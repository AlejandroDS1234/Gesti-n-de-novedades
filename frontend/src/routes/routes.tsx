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
            <Route path="/inicio" element={<Inicio />} />
            </Route>
        </ReactRoutes>
    )
}

export default Routes;