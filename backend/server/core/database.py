import psycopg2

def conectar():
    return psycopg2.connect(
        host="localhost",
        port="5432",
        database="Gestion_novedades",
        user="postgres",
        password="123456"
    )
    
if __name__ == "__main__":
    try:
        conexion = conectar()
        print("Conexión exitosa a PostgreSQL")
        conexion.close()
    except psycopg2.Error as error:
        print("Error al conectar:", error)
