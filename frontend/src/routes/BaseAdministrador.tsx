import { Outlet } from "react-router-dom";
import Sidebar from "../assets/components/Sidebar";
import Header from "../assets/components/Header";
import "../css/inicio.css";

function BaseAdministrador() {
    return ( 
    <div className="app-shell">
        <Sidebar opciones={[
            { nombre: "Registrar", icono: "✎", pagina: "/administrador/inicio" },
        ]} />
        <main className="main-area">
            <Header/>
            <div className="page-content">
            <Outlet />
            </div>
        </main>
    </div>
    );
}

export default BaseAdministrador;