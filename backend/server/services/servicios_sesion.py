from flask import session
from server.core.database import ejecutar_consulta


def guardar_sesion(identificacion: str):
    session["identificacion"] = identificacion


def obtener_usuario():
    identificacion = session.get("identificacion")
    return ejecutar_consulta(
        f"SELECT * FROM usuarios WHERE identificacion = '{identificacion}'"
    )


def esta_sesion_guardada():
    return session.get("identificacion") is not None
