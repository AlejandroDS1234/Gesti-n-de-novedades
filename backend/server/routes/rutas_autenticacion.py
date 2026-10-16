from flask import Blueprint, request
from server.core.respuestas import success_response, error_response
from server.core.database import ejecutar_consulta
from server.services.servicios_sesion import guardar_sesion
from werkzeug.security import check_password_hash

autenticacion_bp = Blueprint("auth", __name__)


@autenticacion_bp.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    usuario = data.get("usuario")
    contraseña = data.get("contrasena")

    if usuario is None or contraseña is None:
        return error_response("Usuario y contraseña son requeridos", 400)

    datos_usuario = ejecutar_consulta(
        """SELECT contrasena_user, estado_user, id_rol
        FROM usuarios
        WHERE identi_user = %s""",
        (usuario,),
        cantidad="one",
    )
    if datos_usuario is None or not check_password_hash(
        datos_usuario.get("contrasena_user"),
        contraseña,
    ):
        return error_response("Usuario o contraseña incorrectos", 401)
    if not datos_usuario.get("estado_user"):
        return error_response("El usuario no está activo", 401)

    rutas_rol = {
        1: "/inicio_aprendiz",
        2: "/inicio_instructor",
        3: "/inicio_administrador",
    }
    guardar_sesion(usuario)
    return success_response(
        message="Usuario autenticado",
        redirigir=rutas_rol.get(datos_usuario.get("id_rol")),
    )
