import psycopg2 
from flask import Flask, request, jsonify

app = Flask(__name__)

def conectar():
    try:
        conexion = psycopg2.connect(
            host = "localhost",
            port = "5000",
            database = "Gestion_novedades",
            user = "postgres",
            password = "123456"
        )
        print("Conexión exitosa a la base de datos")
    except psycopg2.Error as e:
        print("Error al conectar a la base de datos:", e)
        return None
    
"""def regitro_usuario():
    if request.method == 'POST':
        db = conectar()
        cursor = db.cursor()
        # datos del formulario(esta es la plantilla de los datos que habrian de insertarse, luego hay que cambiarlo por los datos de un formulario)
        valores = (n.o_documento, tipo_documento, nombre, nombre2, apellido, apellido2, fecha_nacimiento, genero, correo, contraseña, True)
        cursor.execute('INSERT INTO usuarios (n.o_documento, tipo_documento, nombre, nombre2, apellido, apellido2, fecha_nacimiento, genero, correo, contraseña, estado) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)')
        cursor.close()
        db.close()

def consultar_usuarios():
    if request.method == 'GET':
        db = conectar()
        cursor = db.cursor()
        cursor.execute('SELECT * FROM usuarios where estado = True')
        usuarios = cursor.fetchall()
        cursor.close()
        db.close()
        return usuarios"""



if __name__ == "__main__":
    conectar()