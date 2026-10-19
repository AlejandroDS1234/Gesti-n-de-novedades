import { Route, Routes as ReactRoutes } from "react-router-dom";
import RutasProtegidas from "./rutasProtegidas";
import Index from "../pages/PageIndex";
import Login from "../pages/login";
import InicioPrincipal from "../pages/inicio";

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RutasProtegidas rutaVerificar="/sesion" />}>
                <Route path="/inicio" element={<InicioPrincipal />}/>
            </Route>
        </ReactRoutes>
    )
}

export default Routes;