from flask import request, make_response, session

from config import app, db, api, os

from models import Profile, Languages

from flask_restful import Resource 

class Profiles(Resource):
    def get(self):
        profiles = [profile.to_dict() for profile in Profile.query.all()]
        return profiles, 200

class Technologies(Resource):
    def get(self):
        languages = [language.to_dict() for language in Languages.query.all()]
        return languages

api.add_resource(Profiles, '/profile')
api.add_resource(Technologies, '/technologies')

if __name__ == "__main__":
    app.run(port=5555, debug=True)