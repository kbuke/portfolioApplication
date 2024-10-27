from flask import request, make_response, session

from config import app, db, api, os

from models import Profile, Languages, Institute, Projects

from flask_restful import Resource 

class Profiles(Resource):
    def get(self):
        profiles = [profile.to_dict() for profile in Profile.query.all()]
        return profiles, 200

class Technologies(Resource):
    def get(self):
        languages = [language.to_dict() for language in Languages.query.all()]
        return languages

class Institutes(Resource):
    def get(self):
        institutes = [institute.to_dict() for institute in Institute.query.all()]
        return institutes

class Project(Resource):
    def get(self):
        projects = [project.to_dict() for project in Projects.query.all()]
        return projects

api.add_resource(Profiles, '/profile')
api.add_resource(Technologies, '/technologies')
api.add_resource(Institutes, '/institutes')
api.add_resource(Project, '/projects')


if __name__ == "__main__":
    app.run(port=5555, debug=True)