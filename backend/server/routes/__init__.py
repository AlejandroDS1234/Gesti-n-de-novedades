from .rutas_autenticacion import autenticacion_bp
from .rutas_sesion import sesion_bp
from .rutas_registro import registro_bp

blueprints = [
    autenticacion_bp,
    sesion_bp,
    registro_bp,
]
