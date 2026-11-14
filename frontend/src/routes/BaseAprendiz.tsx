import { Outlet } from "react-router-dom";
import Sidebar from "../assets/components/Sidebar";
import Header from "../assets/components/Header";
import "../css/inicio.css";

function BaseAprendiz() {
    return ( 
    <div className="app-shell">
        <Sidebar opciones={[
              { nombre: "Inicio", icono: "⌂", pagina: "/aprendiz/inicio" },
                { nombre: "Novedades", icono: "✎", pagina: "/aprendiz/nueva_novedad" },
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

export default BaseAprendiz;