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


def ejecutar_consulta(
    comando: str,
    parametros: tuple = (),
    cantidad: str = "all",
):
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

def ejecutar_transaccion(consultas: list[tuple[str, tuple]]) -> None:
    """
    Ejecuta varias consultas SQL dentro de una única transacción.

    Recibe una lista de pares. Cada par contiene:
      1. Una sentencia SQL con marcadores `%s`.
      2. Una tupla con los valores que reemplazan esos marcadores.

    Todas las consultas usan la misma conexión y el mismo cursor. La función
    confirma la transacción solo cuando todas se ejecutan correctamente. Si
    una consulta produce un error, revierte los cambios realizados en esta
    transacción y vuelve a lanzar el error para que la ruta que llamó la
    función pueda manejarlo.

    La conexión se cierra al terminar, tanto si la transacción tiene éxito
    como si falla.

    Args:
        consultas: consultas SQL y sus parámetros, en el orden de ejecución.
            Ejemplo:
            [
                ("INSERT INTO tabla_a (id) VALUES (%s)", (10,)),
                ("INSERT INTO tabla_b (id) VALUES (%s)", (10,)),
            ]

    Raises:
        psycopg2.Error: si PostgreSQL rechaza una consulta o falla la conexión.
        Exception: si ocurre otro error durante la ejecución. En ambos casos,
            la transacción se revierte y el error se propaga al llamador.

    Returns:
        None
    """
    conexion = conectar()

    try:
        with conexion.cursor() as cursor:
            for comando, parametros in consultas:
                cursor.execute(comando, parametros)

        # Solo confirma después de que todas las consultas hayan terminado.
        conexion.commit()

    except Exception:
        # Deshace las consultas que alcanzaron a ejecutarse en esta transacción.
        conexion.rollback()

        # Conserva el error original para que la ruta pueda responder o registrarlo.
        raise

    finally:
        # Libera la conexión incluso si ocurrió un error.
        conexion.close()