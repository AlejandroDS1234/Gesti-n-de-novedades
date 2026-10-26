import { Route, Routes as ReactRoutes } from "react-router-dom";
import RutasProtegidas from "./rutasProtegidas";
import Index from "../pages/PageIndex";
import Login from "../pages/login";
import InicioPrincipal from "../pages/inicio";
import RegistAdmin from "../pages/regist_admin";

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RutasProtegidas rutaVerificar="/sesion" />}>
                <Route path="/inicio" element={<InicioPrincipal />}/>
            </Route>
            <Route path="/regist_admin" element={<RegistAdmin />} />
        </ReactRoutes>
    )
}

export default Routes;