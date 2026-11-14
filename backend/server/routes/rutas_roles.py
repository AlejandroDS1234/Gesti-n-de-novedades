from flask import Blueprint, request
from server.core.decoradores import necesita
from server.services.servicios_sesion import (
    esta_sesion_guardada,
    obtener_usuario,
)
from server.services.servicios_roles import tipo_novedades_rol_service
from server.core.respuestas import success_response

bp_roles = Blueprint("roles", __name__)


@bp_roles.route("/api/tipos_novedad_rol", methods=["GET"])
@necesita("autenticarse", esta_sesion_guardada, redireccion="/login")
def tipos_novedad_rol():
    id_rol = obtener_usuario().get("id_rol")
    tipo_novedades = tipo_novedades_rol_service(id_rol)
    return success_response(
        data=tipo_novedades,
        message="Tipos de novedad para el rol obtenidos correctamente",
    )
