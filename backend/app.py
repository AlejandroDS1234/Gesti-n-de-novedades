from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/inicio", methods=["GET"])
def hello():
    funciona = "Esto esta funcionando"
    return jsonify({"message": funciona})


if __name__ == "__main__":
    print("Iniciando el servidor Flask...")
    app.run(host="0.0.0.0", debug=True, port=8200)
