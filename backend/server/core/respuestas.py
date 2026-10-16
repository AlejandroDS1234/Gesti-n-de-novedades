from flask import jsonify


def success_response(
    data: dict = None,
    message: str = "Operación exitosa",
    status_code: int = 200,
    redirigir: str = None,
):
    """Genera una respuesta JSON estandarizada para casos de éxito."""
    repuesta = {
        "success": True,
        "data": data,
        "message": message,
        "code": status_code,
    }
    if redirigir:
        repuesta["redirigir"] = redirigir
    return (
        jsonify(repuesta),
        status_code,
    )


def error_response(
    message: str = "Ha ocurrido un error",
    status_code: int = 400,
    data: dict = None,
    redirigir: str = None,
):
    """Genera una respuesta JSON estandarizada para casos de error."""
    repuesta = {
        "success": False,
        "data": data,
        "message": message,
        "code": status_code,
    }
    if redirigir:
        repuesta["redirigir"] = redirigir
    return (
        jsonify(repuesta),
        status_code,
    )
