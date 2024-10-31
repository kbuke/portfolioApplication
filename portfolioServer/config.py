import os 

from flask import Flask
from flask_cors import CORS 
from flask_migrate import Migrate 
from flask_restful import Api 
from flask_bcrypt import Bcrypt 
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv
load_dotenv()

app = Flask(
    __name__,
    static_url_path="",
    static_folder="./portfolioClient/client/build",
    template_folder="./portfolioClient/client/build"
)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False 
app.json.compact = False 
app.secret_key = b'I\x17\xbdV?\xb1T\xf7\\s\x9d\xa8tU\x98\x86'

bcrypt = Bcrypt(app)

api = Api(app)

db = SQLAlchemy()

db.init_app(app)

CORS(app)
migrate = Migrate(app, db)