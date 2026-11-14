import { Outlet } from "react-router-dom";
import Sidebar from "../assets/components/Sidebar";
import Header from "../assets/components/Header";
import "../css/inicio.css";

function BaseInstructor() {
    return (
    <div className="app-shell">
        <Sidebar opciones={[
              { nombre: "Inicio", icono: "⌂", pagina: "/instructor/inicio" },
                { nombre: "Novedades", icono: "✎", pagina: "/instructor/nueva_novedad" },
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

export default BaseInstructor;