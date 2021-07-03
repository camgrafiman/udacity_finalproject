import os
from sqlalchemy import (
    Column,
    String,
    Integer,
    Float,
    ForeignKey,
    DateTime,
    create_engine
)
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy
import json
import datetime
# environment variables using python-decouple (.env) file :
from decouple import config

DATABASE_URI = config('DATABASE_URI')
# Switch if you want to test with local database path.
# DATABASE_URI = config('DATABASE_URI_LOCAL')

db = SQLAlchemy()

'''
setup_db(app) binds a flask application and a SQLAlchemy service
'''


def setup_db(app, database_path=DATABASE_URI):
    app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URI
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    print("DATABASE SETUP COMPLETE.")


class User(db.Model):
    __tablename__ = 'test'
    id = Column(Integer, primary_key=True)
    name = Column(String(length=80))
    password = Column(String(length=80))

    def __init__(self, name, password):
        self.name = name
        self.password = password

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'password': self.password
        }


# Association table Many-to-Many between Character and Show Classes/tables.
casts = db.Table(
    'casts',
    db.Column(
        'character_id',
        db.Integer,
        db.ForeignKey('characters.id'),
        primary_key=True),
    db.Column(
        'show_id',
        db.Integer,
        db.ForeignKey('shows.id'),
        primary_key=True))


class Character(db.Model):
    __tablename__ = 'characters'
    id = Column(Integer, primary_key=True)
    name = Column(String(length=150), nullable=False)
    character_name = Column(String(length=150), nullable=False)
    age = Column(Integer, default=0)
    gender = Column(String(length=50))
    image = Column(
        String,
        default="https://www.labicok.com/wp-content/uploads/2020/09/default-user-image.png")
    showcasts = db.relationship(
        'Show', secondary=casts, backref=db.backref('cast', lazy=True))

    def __init__(self, name, character_name, age, gender, image):
        self.name = name
        self.character_name = character_name
        self.age = age,
        self.gender = gender,
        self.image = image

    def __repr__(self):
        return f'<<Character Name: {self.name} - age: {self.age} - gender: {self.gender} - img: {self.image} >>'

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def characterShows(character_id):
        return Show.query.filter(Show.character_id == character_id).all()

    def format(self):
        return {
            'id': self.id,
            'character_name': self.character_name,
            'gender': self.gender
        }

    def formatFull(self):

        return {
            'id': self.id,
            'name': self.name,
            'age': self.age,
            'character_name': self.character_name,
            'gender': self.gender,
            'image': self.image,
            'shows': [{
                'id': show.id,
                'title': show.title,
                'show_type': show.show_type,
                'release_date': show.release_date,
                'rating': show.rating
            } for show in self.showcasts]
        }


class Show(db.Model):
    __tablename__ = 'shows'
    id = Column(Integer, primary_key=True)
    title = Column(String, unique=True, nullable=False)
    show_type = Column(String)  # series, movie, trailer
    show_description = Column(String)
    release_date = Column(Integer, nullable=False)
    rating = Column(Float, nullable=False, default=0.0)
    categories = db.relationship('Category', backref='show')

    # Show.cast  (self.cast) is available.

    def __init__(
            self,
            title,
            show_type,
            show_description,
            release_date,
            rating):
        self.title = title
        self.show_type = show_type
        self.show_description = show_description
        self.release_date = release_date
        self.rating = rating

    def __repr__(self):
        return f'<Show {self.id} - {self.title} - {self.categories[0].cat_type}'

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'title': self.title,
            'show_type': self.show_type

        }

    def formatFull(self):
        return {
            'id': self.id,
            'title': self.title,
            'show_type': self.show_type,
            'show_description': self.show_description,
            'release_date': self.release_date,
            'rating': self.rating,
            'cast': [character.format() for character in self.cast],
            'categories': [category.cat_type for category in self.categories]
        }


class Category(db.Model):
    __tablename__ = 'categories'

    id = Column(Integer, primary_key=True)
    cat_type = Column(String)
    show_id = Column(Integer, db.ForeignKey('shows.id'))

    # def __init__(self, cat_type):
    #     self.cat_type = cat_type

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'cat_type': self.cat_type
        }


'''
db_drop_and_create_all()
    drops the database tables and starts fresh
    can be used to initialize a clean database
    COMMENT TO DEACTIVATE:
'''


def db_drop_and_create_all():
    db.drop_all()
    db.create_all()
    # add one demo row which is helping in POSTMAN test:
    user = User(
        name='testUser',
        password='testPass'
    )

    user.insert()

    character = Character(
        name='testCharacter 1',
        character_name='Test char name',
        age=38,
        gender='female',
        image='https://elfinalde.s3-accelerate.amazonaws.com/2016/03/qDJ3TIIHnaE9x6GUt9QlDXi3KRZ.jpg'
    )
    character.insert()

    defaultShow = Show(
        title="Fire and blood",
        show_type="Series",
        show_description="Got precquel",
        release_date=2021,
        rating=4.5
    )
    defaultShow.insert()

    # Add default categories and default No-Show:
    noShow = Show(title='No show', show_type='No type',
                  show_description='No show', release_date=2021, rating=0.0)
    noShow.insert()

    categoryUnkwnown = Category(cat_type='Unknown', show=noShow)
    categoryMovies = Category(cat_type='Movies', show=noShow)
    categorySeries = Category(cat_type='Series', show=noShow)
    categoryTrailer = Category(cat_type='Trailer', show=noShow)

    categoryUnkwnown.insert()
    categoryMovies.insert()
    categorySeries.insert()
    categoryTrailer.insert()
