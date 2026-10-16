from flask import session
from server.core.database import ejecutar_consulta


def guardar_sesion(identificacion: str):
    session["identificacion"] = identificacion


def obtener_usuario():
    identificacion = session.get("identificacion")
    return ejecutar_consulta(
        "SELECT * FROM usuarios WHERE identi_user = %s",
        (identificacion,),
        cantidad="one",
    )


def esta_sesion_guardada():
    return session.get("identificacion") is not None
