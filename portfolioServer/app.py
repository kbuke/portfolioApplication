from flask import request, make_response, session

from config import app, db, api, os

from models import Profile, Languages, Institute, Projects, ProjectPoints, Emails, ProjectLanguages

from flask_restful import Resource 

import smtplib 

from email.mime.text import MIMEText

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

class Points(Resource):
    def get(self):
        points = [point.to_dict() for point in ProjectPoints.query.all()]
        return points 

class ProjectLanguage(Resource):
    def get(self):
        project_tech = [tech.to_dict() for tech in ProjectLanguages.query.all()]
        return project_tech

class Login(Resource):
    def post(self):
        json = request.get_json()
        email = json.get("email")
        password = json.get("password")

        if not email or not password:
            return {"error": "Name and Password required"}, 400
        
        user = Profile.query.filter(Profile.email == email).first()

        if user and user.authenticate(password):
            session["user_id"] = user.id 
            return user.to_dict(), 200 
        
        return {"error": "Invalid username or password"}

class Logout(Resource):
    def delete(self):
        user_id = session.get("user_id")
        if user_id:
            session.pop("user_id")
            return {}, 204 
        return {"message": "Unauthorized"}, 401

class CheckSession(Resource):
    def get(self):
        user_id = session.get("user_id")
        if user_id:
            user = Profile.query.filter(Profile.id == user_id).first()
            if user:
                return user.to_dict(), 200 
        return {"message": "Unauthorized user"}


class Email(Resource):
    def get(self):
        emails = [email.to_dict() for email in Emails.query.all()]
        return emails
    
    def post(self):
        json = request.get_json()

        # Extract the email details from the request body
        recipient = json.get("userEmail")  # Your email (where the message is sent)
        sender_name = json.get("respondAddress")  # The sender's email (provided by the user)
        sender_company = json.get("senderCompany")
        subject = json.get("emailSubject")
        message = json.get("emailMessage")

        try:
            # Save email details to database
            new_email = Emails(
                recipient=recipient,
                sender_name=sender_name,
                sender_company=sender_company,
                subject=subject,
                message=message  
            )
            db.session.add(new_email)
            db.session.commit()

            # SMTP server configuration
            smtp_server = "smtp.gmail.com"
            smtp_port = 587
            sender_email = "kabuke13@gmail.com"  
            sender_password = "qnwx hges envp ivzq"  # Ensure this is securely stored in an environment variable

            # Construct the email message
            msg = MIMEText(f"From: {sender_name}\nCompany: {sender_company}\n\nMessage:\n{message}")
            msg["Subject"] = subject
            msg["From"] = sender_email  # The sender (you)
            msg["To"] = recipient  # The recipient (you)

            # Send the email via Gmail SMTP
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()  # Secure the connection
                server.login(sender_email, sender_password)
                server.sendmail(sender_email, recipient, msg.as_string())

            return {"message": "Email sent successfully"}, 201

        except smtplib.SMTPException as smtp_error:
            return {"error": "Failed to send email: " + str(smtp_error)}, 500

api.add_resource(Profiles, '/profile')
api.add_resource(Technologies, '/technologies')
api.add_resource(Institutes, '/institutes')
api.add_resource(Project, '/projects')
api.add_resource(Points, '/points')
api.add_resource(Email, '/emails')
api.add_resource(ProjectLanguage, '/projecttech')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(CheckSession, '/check_session')


if __name__ == "__main__":
    app.run(port=5555, debug=True)