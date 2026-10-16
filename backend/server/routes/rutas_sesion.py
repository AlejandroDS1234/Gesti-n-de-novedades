from flask import Blueprint, request
from server.core.respuestas import success_response, error_response
from server.services.servicios_sesion import (
    esta_sesion_guardada,
    obtener_usuario,
    cerrar_sesion,
)
from server.core.decoradores import necesita

sesion_bp = Blueprint("session", __name__)


@sesion_bp.route("/api/sesion", methods=["POST", "GET"])
@necesita("autenticarse", esta_sesion_guardada, redireccion="/login")
def sesion():
    datos_solicitados = request.get_json(silent=True) or ["identi_user"]
    usuario = obtener_usuario()
    verificar_datos_validos = any(
        dt
        not in [
            "identi_user",
            "tipo_id_user",
            "nombre1_user",
            "nombre2_user",
            "apellido1_user",
            "apellido2_user",
            "fecha_naci_user",
            "genero_user",
            "correo_user",
            "estado_user",
            "id_rol",
        ]
        for dt in datos_solicitados
    )
    if verificar_datos_validos:
        return error_response("Solicitud inválida", 400)
    usuario_filtrado = {dt: usuario[dt] for dt in datos_solicitados}
    return success_response(usuario_filtrado, 200)


@sesion_bp.route("/api/cerrar_sesion", methods=["POST"])
@necesita("autenticarse", esta_sesion_guardada, redireccion="/login")
def cerrar_sesion_route():
    cerrar_sesion()
    return success_response(
        message="Sesión cerrada correctamente",
        status_code=200,
        redirigir="/login",
    )
