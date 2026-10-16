import psycopg2.extras
import os


def conectar():
    return psycopg2.connect(
        host=os.getenv("POSTGRES_HOST", "localhost"),
        port=os.getenv("POSTGRES_PORT", "5432"),
        database=os.getenv("POSTGRES_DB"),
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
    )


def ejecutar_comando(comando: str, parametros: tuple = ()):
    with conectar() as conexion:
        with conexion.cursor() as cursor:
            cursor.execute(comando, parametros)
            conexion.commit()


def ejecutar_consulta(comando: str, parametros: tuple = (), cantidad: str = "all"):
    with conectar() as conexion:
        with conexion.cursor(
            cursor_factory=psycopg2.extras.RealDictCursor,
        ) as cursor:
            cursor.execute(comando, parametros)
            if cantidad == "one":
                resultados = cursor.fetchone()
            else:
                resultados = cursor.fetchall()
            return resultados
