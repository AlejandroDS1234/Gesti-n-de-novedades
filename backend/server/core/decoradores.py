from functools import wraps
from .respuestas import error_response


def necesita(nombre: str, validacion: bool, redireccion: str = "/"):
    def decorador(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if not validacion():
                return error_response(
                    message=f"Necesitas {nombre} para acceder",
                    redirect=redireccion,
                )
            return func(*args, **kwargs)

        return wrapper

    return decorador
