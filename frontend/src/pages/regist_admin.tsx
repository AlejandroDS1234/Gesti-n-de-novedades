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

    async function enviarDatos() {
        const datos_admin = {
            documento : documento,
            tipoIdentificacion : tipoIdentificacion,
            nombre : nombre,
            nombre2 : nombre2,
            apellido : apellido,
            apellido2 : apellido2,
            fechanacimiento : fechanacimiento,
            genero : genero,
            correo : correo,
            contraseña : contraseña,
            estado : estado
        };
        try {
            //envio de los datos al backend
            const respuesta = await fetch("http://localhost:5000/regist_admin", {
                method: "POST",
                // se indica que el archivo es un json
                headers: {
                    "Content-Type": "application/json"
                },
                // se envian los datos en formato json
                body: JSON.stringify(datos_admin)
            });

            //se verifica por si acaso la respuesta del backend es incorrecta
            if (!respuesta.ok) {
                throw new Error("Error al registrar el administrador");
            }
            //resivimos la respuesta del bakend
            const respuestaJson = await respuesta.json();
            console.log("Respuesta del backend:", respuestaJson);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }

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
                <form onSubmit={(e) => { e.preventDefault(); enviarDatos(); }}>
                    <input 
                        type = "number"
                        placeholder="Documento"
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                        required
                    />
                    <select 
                        value={tipoIdentificacion}
                        onChange={(e) => setTipoIdentificacion(e.target.value)}
                        required
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
                        required
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
                        required
                    />
                    <input 
                        type = "text"
                        placeholder="Segundo Apellido"
                        value={apellido2}
                        onChange={(e) => setApellido2(e.target.value)}
                        required
                    />
                    <input 
                        type = "date"
                        placeholder="Fecha de Nacimiento"
                        value={fechanacimiento}
                        onChange={(e) => setFechanacimiento(e.target.value)}
                        required
                    />
                    <input 
                        type = "text"
                        placeholder="Género"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        required
                    />
                    <input 
                        type = "email"
                        placeholder="Correo Electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                    <input 
                        type = "password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                    <button type="submit" className="boton-ingresar" onClick={enviarDatos}>
                        <span>Registrar Administrador</span>
                    </button>
                </form>
            </section>
        </main>
    );
}

export default RegistAdmin;