import os
from flask import (
    Flask,
    request,
    abort,
    jsonify
)
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random
import datetime

from database.models import (
    setup_db,
    db_drop_and_create_all,
    User,
    Category,
    Character,
    Show
)
from auth.auth import AuthError, requires_auth


def create_app(test_config=None):
    app = Flask(__name__, static_folder="./build", static_url_path="/")
    setup_db(app)
    CORS(app, resources={r"/*": {"origins": "*"}})

    # TESTING: Unconment on the initial run to setup.
    # Used to erase data from the database tables and create a testUser.
    # db_drop_and_create_all()

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

    # Main route to serve frontend:
    @app.route("/")
    def index():
        return app.send_static_file('index.html')

    # API MAIN ENDPOINT:

    @app.route("/api/")
    def apiMain():
        return jsonify({
            "apiVersion": 1.0,
            "status_code": 200
        })

    @app.route("/api/user")
    def apiUsers():
        users = User.query.all()
        return jsonify({
            "users": [user.format() for user in users],
            "success": True
        })

    '''
    [# CATEGORY ENDPOINTS #]

    '''

    @app.route("/api/categories", methods=['GET'])
    @requires_auth("get:categories")
    def categories(payload):

        try:
            categories = Category.query.order_by(Category.id).all()

            return jsonify({
                "success": True,
                "status_code": 200,
                "categories": [category.format() for category in categories]
            })
        except BaseException:
            abort(422)

    @app.route("/api/categories", methods=['POST'])
    @requires_auth("post:categories")
    def categories_post(payload):
        request_data = request.get_json()

        try:
            if 'cat_type' not in request_data or 'cat_type' == '':
                abort(422)

            category_type = request_data['cat_type']
            new_category = Category(cat_type=category_type)
            new_category.insert()

            return jsonify({
                'success': True,
                'status_code': 200,
                'category': new_category.format()
            })

        except BaseException:
            abort(422)

    @app.route("/api/categories/<int:category_id>", methods=['PATCH'])
    @requires_auth("patch:categories")
    def category_patch(payload, category_id):

        category = Category.query.get_or_404(category_id)
        try:
            request_data = request.get_json()
            category.cat_type = request_data['cat_type']
            category.update()

            return jsonify({
                "success": True,
                "status_code": 200,
                "category": category.format()
            })
        except BaseException:
            abort(422)

    @app.route("/api/categories/<int:category_id>", methods=['DELETE'])
    @requires_auth("delete:categories")
    def category_delete(payload, category_id):

        category = Category.query.get_or_404(category_id)
        try:
            category.delete()

            return jsonify({
                "success": True,
                "status_code": 200,
                "category_deleted": category.format()
            })
        except BaseException:
            abort(422)

    '''
    [# CHARACTER ENDPOINTS #]

    '''

    @app.route("/api/characters", methods=['GET'])
    @requires_auth("get:characters")
    def characters(payload):
        characters = Character.query.order_by(Character.id).all()
        return jsonify({
            'success': True,
            'status_code': 200,
            'characters': [character.format() for character in characters]

        })

    @app.route("/api/characters-full", methods=['GET'])
    @requires_auth("get:characters")
    def characters_full(payload):
        characters = Character.query.order_by(Character.id).all()
        return jsonify({
            'success': True,
            'status_code': 200,
            'characters': [character.formatFull() for character in characters]

        })

    @app.route("/api/characters/<int:character_id>", methods=['GET'])
    @requires_auth("get:character-info")
    def character_get(payload, character_id):

        try:
            character_data = Character.query.get_or_404(character_id)

            return jsonify({
                'success': True,
                'status_code': 200,
                'character': character_data.format(),
                'character_full': character_data.formatFull()
            })

        except BaseException:
            abort(404)

    @app.route("/api/characters", methods=['POST'])
    @requires_auth("post:character")
    def characters_post(payload):

        try:
            request_data = request.get_json()
            if 'name' not in request_data \
                    or 'character_name' not in request_data:
                abort(422)

            named = request_data['name']
            character_named = request_data['character_name']
            aged = request_data['age']
            genderd = request_data['gender']
            imaged = request_data['image']

            new_character = Character(
                name=named,
                character_name=character_named,
                age=aged,
                gender=genderd,
                image=imaged)
            print(new_character)
            new_character.insert()

            return jsonify({
                'success': True,
                'status_code': 200,
                'character': new_character.format()
            })

        except BaseException:
            abort(422)

    @app.route("/api/characters/<int:character_id>", methods=['PATCH'])
    @requires_auth("patch:character")
    def character_patch(payload, character_id):
        character_data = Character.query.get_or_404(character_id)

        try:

            request_data = request.get_json()
            print(request_data)

            if 'name' in request_data:
                if request_data['name'] == '':
                    abort(422)
                character_data.name = request_data['name']
            if 'character_name' in request_data:
                if request_data['character_name'] == '':
                    abort(422)
                character_data.character_name = request_data['character_name']
            if 'age' in request_data:
                if request_data['age'] == 0:
                    abort(422)
                character_data.age = request_data['age']
            if 'gender' in request_data:
                if request_data['gender'] == '':
                    abort(422)
                character_data.gender = request_data['gender']

            if 'image' in request_data:
                if request_data['image'] == '':
                    abort(422)

                character_data.image = request_data['image']

            character_data.update()

            return jsonify({
                'success': True,
                'status_code': 200,
                'character': character_data.format()
            })
        except BaseException:
            abort(422)

    @app.route("/api/characters/<int:character_id>", methods=['DELETE'])
    @requires_auth("delete:character")
    def character_delete(payload, character_id):
        character_data = Character.query.get_or_404(character_id)

        try:
            character_data.delete()
            return jsonify({
                'success': True,
                'status_code': 200,
                'character_deleted': character_data.format()

            })
        except BaseException:
            abort(422)

    '''
    [# SHOW ENDPOINTS #]

    '''

    @app.route("/api/shows", methods=['GET'])
    @requires_auth("get:shows")
    def shows(payload):
        shows = Show.query.all()
        return jsonify({
            'success': True,
            'status_code': 200,
            'shows': [show.formatFull() for show in shows]
        })

    @app.route("/api/shows/<int:show_id>", methods=['GET'])
    @requires_auth("get:show-info")
    def show_get(payload, show_id):
        show = Show.query.get_or_404(show_id)
        try:
            return jsonify({
                'success': True,
                'status_code': 200,
                'show': show.formatFull()
            })
        except BaseException:
            abort(422)

    @app.route("/api/shows", methods=['POST'])
    @requires_auth("post:show")
    def shows_post(payload):
        request_data = request.get_json()
        try:

            if 'title' not in request_data \
                    or 'show_type' not in request_data \
                    or 'show_description' not in request_data \
                    or 'release_date' not in request_data \
                    or 'rating' not in request_data:
                abort(422)

            if request_data['title'] == '' \
                    or request_data['show_type'] == '' \
                    or request_data['release_date'] <= 0 \
                    or request_data['rating'] < 0:
                abort(422)

            title = request_data['title']
            show_type = request_data['show_type']
            show_description = request_data['show_description']
            release_date = request_data['release_date']
            rating = request_data['rating']

            new_show = Show(
                title=title,
                show_type=show_type,
                show_description=show_description,
                release_date=release_date,
                rating=rating)
            new_show.insert()

            return jsonify({
                'success': True,
                'status_code': 200,
                'show': new_show.format(),
                'showFull': new_show.formatFull()
            })

        except BaseException:
            abort(422)

    @app.route("/api/shows/<int:show_id>", methods=['PATCH'])
    @requires_auth("patch:show")
    def shows_patch(payload, show_id):
        show_data = Show.query.get_or_404(show_id)
        try:
            request_data = request.get_json()
            if 'title' not in request_data \
                    or 'show_type' not in request_data \
                    or 'show_description' not in request_data \
                    or 'release_date' not in request_data \
                    or 'rating' not in request_data:
                abort(422)

            if request_data['title'] == '' \
                    or request_data['show_type'] == '' \
                    or request_data['release_date'] <= 0 \
                    or request_data['rating'] < 0:
                abort(422)
            if request_data['release_date'] <= 0:
                abort(422)
            if request_data['rating'] == '' \
                    or 'rating' not in request_data:
                abort(422)

            show_data.title = request_data['title']
            show_data.show_type = request_data['show_type']
            show_data.show_description = request_data['show_description']
            show_data.release_date = request_data['release_date']
            show_data.rating = request_data['rating']

            show_data.update()

            return jsonify({
                'success': True,
                'status_code': 200,
                'showFull': show_data.formatFull()
            })

        except BaseException:
            abort(422)

    @app.route("/api/shows/<int:show_id>", methods=['DELETE'])
    @requires_auth("delete:show")
    def shows_delete(payload, show_id):
        show_data = Show.query.get_or_404(show_id)
        try:
            show_data.delete()

            return jsonify({
                'success': True,
                'status_code': 200,
                'show_deleted': show_data.format()
            })

        except BaseException:
            abort(422)

    '''
    [ERROR HANDLERS]
    '''

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            'success': False,
            'status_code': 400,
            'message': 'Bad request'
        }), 400

    @app.errorhandler(401)
    def not_found(error):
        return jsonify({
            'success': False,
            'status_code': 401,
            'message': 'Sorry, you are not authorized/allowed to view this content.'
        }), 401

    @app.errorhandler(403)
    def forbidden(error):
        return jsonify({
            'success': False,
            'status_code': 403,
            'message': 'Forbidden'
        }), 403

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            'success': False,
            'status_code': 404,
            'message': 'Not found.'
        }), 404

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({
            'success': False,
            'status_code': 405,
            'message': 'Method not allowed.'
        }), 405

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({
            'success': False,
            'status_code': 422,
            'message': 'Unprocessable'
        }), 422

    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({
            'success': False,
            'status_code': 500,
            'message': 'Internal server error.'
        }), 500

    @app.errorhandler(502)
    def bad_gateway(error):
        return jsonify({
            'success': False,
            'status_code': 502,
            'message': 'Bad gateway.'
        }), 502

    @app.errorhandler(503)
    def service_unavailable(error):
        return jsonify({
            'success': False,
            'status_code': 503,
            'message': 'Service unavailable'
        }), 503

    @app.errorhandler(504)
    def gateway_out(error):
        return jsonify({
            'success': False,
            'status_code': 504,
            'message': 'Gateway timed out'
        }), 504

    '''
    Error handler for AuthError
    '''
    # Error Handler (401-403) Unauthorized

    @app.errorhandler(AuthError)
    def not_authenticated(auth_error):
        return jsonify({
            "success": False,
            "status_code": auth_error.status_code,
            "message": auth_error.error
        }), auth_error.status_code

    return app


app = create_app()
