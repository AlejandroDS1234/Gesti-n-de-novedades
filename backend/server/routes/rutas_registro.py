from flask import Blueprint, request
from server.core.respuestas import success_response, error_response
from server.core.database import ejecutar_transaccion

registro_bp = Blueprint('registro', __name__)

@registro_bp.route('/regist_admin', methods=['POST'])
def registro_admin():
    if request.method == 'POST':
        datos = request.get_json()
        valores = (datos['documento'], datos['tipoIdentificacion'], datos['nombre'], datos['nombre2'], datos['apellido'], datos['apellido2'], datos['fechanacimiento'], datos['genero'], datos['correo'], datos['contraseña'], True, 3)
        consultas = [
            ('INSERT INTO usuarios (identi_user, tipo_id_user, nombre1_user, nombre2_user, apellido1_user, apellido2_user, fecha_naci_user, genero_user, correo_user, contrasena_user, estado_user, id_rol) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', valores),
            (
                "INSERT INTO coordinadores (identi_user, id_area) VALUES (%s, %s)",
                (datos["documento"], datos["area"]),
            ),
        ]
        ejecutar_transaccion(consultas)
        return success_response({'mensaje': 'Usuario registrado exitosamente'})
    else:
        return error_response('Método no permitido', 405)