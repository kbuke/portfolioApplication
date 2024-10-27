from models import Profile, Institute, Languages

from app import app 
from config import db 

from datetime import date

if __name__ == "__main__":
    with app.app_context():
        print("Start seed...")

        db.drop_all()
        db.create_all()
        print("Begin seeding...")

        print("Seeding user...")
        kbuke13 = Profile(
            first_name = "Kaan",
            last_name = "Buke",
            image = "https://www.picdrop.com/kaanbuke/vcAotmCPKg?file=67af3e004329e3c6dde97c5fdb0a8e01",
            email="kabuke13@gmail.com",
            profile_bio="A software engineer who is eager to build on what he learnt on his course.",
            employed=False,
            open_to_work=True,
            date_of_birth=date(1994, 1, 13),
            home_country="United Kingdom",
            home_town="London",
            current_country="South Africa",
            current_town="London",
            linkdn_link="https://www.linkedin.com/in/kaan-buke-432b00258/",
            git_hub_link="https://github.com/kbuke",
            insta_link="https://www.instagram.com/packsnpaws/"
        )
        kbuke13.password_hash = "kara1328"
        db.session.add_all([kbuke13])
        db.session.commit()

        print("Seeding institutes...")
        flat_iron = Institute(
            name = "FlatIron School",
            logo = "https://shecancode.io/wp-content/uploads/2023/11/Flatiron-School1-768x768.jpg",
            location = "New York, USA"
        )
        db.session.add_all([flat_iron])
        db.session.commit()

        print("Seeding technologies")
        HTML = Languages(
            logo = "https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg",
            name = "HTML",
            experience = "1 year"
        )
        JavaScript = Languages(
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            name = "JavaScript",
            experience = "1 year"
        )
        db.session.add_all([HTML, JavaScript])
        db.session.commit()

