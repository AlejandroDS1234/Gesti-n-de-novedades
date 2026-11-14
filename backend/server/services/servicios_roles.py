from server.core.database import ejecutar_consulta


def tipo_novedades_rol_service(id_rol: int):
    return ejecutar_consulta(
        """
    SELECT tp.id_tipo_novedad, tp.nom_novedad FROM tipo_novedad tp
    JOIN tipo_novedad_roles tnr ON tnr.id_tipo_novedad = tp.id_tipo_novedad
    WHERE tnr.id_rol = %s     
    """,
        (id_rol,),
    )
