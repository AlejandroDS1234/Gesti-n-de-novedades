import { Outlet } from "react-router-dom";
import Boton_cerrar_sesion from "../assets/botones/boton_cerrar_sesion";

function Inicio() {
    return (
        <>
        <p>Estas adentro😎</p>
        <Outlet />
        <Boton_cerrar_sesion />
        </>
    )
}

export default Inicio;

