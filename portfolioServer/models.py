from config import db, bcrypt 
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates

class Profile(db.Model, SerializerMixin):
    __tablename__ = "profile"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    profile_bio = db.Column(db.String, nullable=False)
    employed = db.Column(db.Boolean, nullable=False)
    open_to_work = db.Column(db.Boolean, nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    home_country = db.Column(db.String, nullable=False)
    home_town = db.Column(db.String, nullable=False)
    current_country = db.Column(db.String, nullable=False)
    current_town = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    git_hub_link = db.Column(db.String, nullable=False, server_default="")
    linkdn_link = db.Column(db.String, nullable=False, server_default="")
    insta_link = db.Column(db.String, nullable=False, server_default="")


    #Password hashing and authentication
    @hybrid_property
    def password_hash(self):
        raise AttributeError("password: write-only attribute")
    
    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)

    
    #Add validation for emails
    @validates("email")
    def validate_email(self, key, value):
        if "@" not in value:
            raise ValueError("Please enter a valid email address")
        return value


class Institute(db.Model, SerializerMixin):
    __tablename__ = "Institutes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    logo = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)


class Languages(db.Model, SerializerMixin):
    __tablename__ = "Languages"

    id=db.Column(db.Integer, primary_key=True)
    logo = db.Column(db.String, nullable=True)
    name = db.Column(db.String, nullable=False)
    experience = db.Column(db.String, nullable=False)