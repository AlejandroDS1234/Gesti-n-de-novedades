from flask import Flask
from flask_cors import CORS
from server.routes import blueprints
import os

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
CORS(app)

for bp in blueprints:
    app.register_blueprint(bp)

if __name__ == "__main__":
    print("Iniciando el servidor Flask...")
    app.run(host="0.0.0.0", debug=True, port=8200)
