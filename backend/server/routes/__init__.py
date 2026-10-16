from .rutas_autenticacion import autenticacion_bp
from .rutas_sesion import sesion_bp

blueprints = [
    autenticacion_bp,
    sesion_bp,
]
