import {useState, useEffect } from "react";

function RegistAdmin() {
    const [documento, setDocumento] = useState("");
    const [tipoIdentificacion, setTipoIdentificacion] = useState("");
    const [nombre, setNombre] = useState("");
    const [nombre2, setNombre2] = useState("");
    const [apellido, setApellido] = useState("");
    const [apellido2, setApellido2] = useState("");
    const [fechanacimiento, setFechanacimiento] = useState("");
    const [genero, setGenero] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const estado = true

    return (
        <main className="pagina">
            <section className="panel-izquierdo">
                <header className="encabezado">
                    <img src="/logo-sena.png" alt="Logo SENA" className="logo-superior" />
                    <div className="separador" />
                    <div className="nombre-centro">
                        <h1>Registro de Administrador</h1>
                        <h2>CBI Palmira</h2>
                        <p>Centro de Biotecnología Industrial</p>
                    </div>
                </header>
                    <input 
                        type = "number"
                        placeholder="Documento"
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                    />
                    <select 
                        value={tipoIdentificacion}
                        onChange={(e) => setTipoIdentificacion(e.target.value)}
                    >
                        <option value="">Seleccione...</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="CE">Cédula de Extranjería</option>
                        <option value="PEP">PEP</option>
                        <option value="PPT">Permiso de Protección Temporal</option>
                    </select>
                    <input 
                        type = "text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input 
                        type = "text"
                        placeholder="Segundo Nombre"
                        value={nombre2}
                        onChange={(e) => setNombre2(e.target.value)}
                    />
                    <input 
                        type = "text"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <input 
                        type = "text"
                        placeholder="Segundo Apellido"
                        value={apellido2}
                        onChange={(e) => setApellido2(e.target.value)}
                    />
                    <input 
                        type = "date"
                        placeholder="Fecha de Nacimiento"
                        value={fechanacimiento}
                        onChange={(e) => setFechanacimiento(e.target.value)}
                    />
                    <input 
                        type = "text"
                        placeholder="Género"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    />
                    <input 
                        type = "email"
                        placeholder="Correo Electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <input 
                        type = "password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    <button type="submit" className="boton-ingresar">
                        <span>Registrar Administrador</span>
                    </button>
            </section>
        </main>
    );
}

export default RegistAdmin;