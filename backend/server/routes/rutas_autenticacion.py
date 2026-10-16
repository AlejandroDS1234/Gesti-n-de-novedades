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
    contraseña_usuario = ejecutar_consulta(
        """SELECT contrasena_user
        FROM usuarios
        WHERE identi_user = %s""",
        (usuario,),
        cantidad="one",
    )
    if contraseña_usuario is None or not check_password_hash(
        contraseña_usuario.get("contrasena_user"),
        contraseña,
    ):
        return error_response("Usuario o contraseña incorrectos", 401)
    guardar_sesion(usuario)
    return success_response(message="Usuario autenticado", redirigir="/inicio")
