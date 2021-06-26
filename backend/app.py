import os
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random

app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")

CORS(app, resources={r"/*": {"origins": "*"}})

# CORS Headers:
@app.after_request
def after_request(response):
    # response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type, Authorization, true')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET, PATCH, POST, DELETE, OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response


@app.route("/")
def index():
    return app.send_static_file('index.html')


@app.route("/api/")
def apiMain():
    return jsonify({
        "apiVersion": "version 1.0"
    })


# Iniciar la aplicación:
if __name__ == '__main__':
    app.run(debug=True)
