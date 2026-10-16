from flask import Blueprint, request
from server.core.respuestas import success_response, error_response
from server.core.database import ejecutar_consulta
from werkzeug.security import check_password_hash

autenticacion_bp = Blueprint("auth", __name__)


@autenticacion_bp.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    usuario = data.get("usuario")
    contraseña = data.get("contrasena")
    contraseña_usuario = ejecutar_consulta(
        """SELECT contrasena_user
        FROM usuarios
        WHERE identi_user = %s""",
        (usuario,),
        cantidad="one",
    )
    if not contraseña_usuario.get(
        "contrasena_user",
    ) or not check_password_hash(
        contraseña_usuario.get("contrasena_user"),
        contraseña,
    ):
        return error_response("Usuario o contraseña incorrectos", 401)
    return success_response(message="Usuario autenticado", redirigir="/inicio")
