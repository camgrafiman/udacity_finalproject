## Udacity Final Project README:

## Capstone Project for Udacity's Full Stack Developer Nanodegree

Heroku Link: https://udacity-camgrafiman2.herokuapp.com/

While running locally: http://localhost:5000

## Getting Started

### Installing Dependencies

#### Python 3.7

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python).

#### Virtual Environment

Recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organized. Instructions for setting up a virual enviornment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/).

I've used virtualenv==16.4.1 just install it with:

```
pip install virtualenv
```

then use this command in your project folder to create a virtual environment:

```
virtualenv myvenv
```

activate the virtual environment:

MAC OS/ Linux:

```
source myenv/bin/activate
```

Windows:

```
.\myenv\Scripts\activate
```

and that's all, now any python commands you use will now work with your virtual environment.

To deactivate:

```
deactivate
```

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages.

##### Key Dependencies

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) is the Python SQL toolkit and ORM we'll use handle the lightweight sqlite database.

## Running the server

In the 'backend' folder:
Before running the application locally, make the following changes in the `app.py` file in root directory:

- Replace the following import statements
  ```
    from database.models import db_drop_and_create_all, setup_db, Actor, Movie
    from auth.auth import AuthError, requires_auth
  ```
  with
  ```
    from .database.models import db_drop_and_create_all, setup_db, Actor, Movie
    from .auth.auth import AuthError, requires_auth
  ```
- Also, uncomment the line `db_drop_and_create_all()` on the initial run to setup the required tables in the database and some default values for tables.

To run the server, execute:

MAC OS / Linux:

```bash
# export DATABASE_URL=<database-connection-url>
export FLASK_APP=app.py
flask run --reload
```

Windows:

```
set FLASK_APP=app.py
```

If you want to debug:

```
set FLASK_DEBUG=true
```

To run the development server:

```
flask run --reload
```

Setting the `FLASK_APP` variable to `app.py` directs flask to use the `app.py` file to find the application.

Using the `--reload` flag will detect file changes and restart the server automatically.

## API Reference

## Getting Started

Base URL: This application can be run locally (`localhost:5000`). The hosted version is at `https://udacity-camgrafiman2.herokuapp.com/`.

Authentication: This application requires authentication to perform various actions. All the endpoints require
various permissions, except the root '/' and '/api' endpoints, and the permissions are passed via the `Bearer` JWT token.

The application has three different types of roles:

- User
  - Can only view the list of characters, shows and categories. Can view complete information for any character, show and categories.
  - Has `get:characters, get:character-info, get:shows, get:show-info, get:categories` permissions.
- Manager
  - Can perform all the actions that `User` can
  - Can also create a character, show, category and also update respective information (PATCH)
  - has `patch:character, patch:show, patch:categories, post:character, post:show, post:categories` permissions + User permissions.
- Admin
  - Can perform all the actions that `User` and `Manager` can plus:
  - Can also delete a character, show and categories.
  - Has `delete:character, delete:show, delete:categories` permissions.

## Error Handling

Errors are returned as JSON objects in the following format:

```
{
        "success": False,
        "error": 401,
        "message": 'Sorry, you are not authorized/allowed to view this content.'
}

```

The API will return the following errors based on how the request fails:

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 405: Method Not Allowed
- 422: Unprocessable Entity
- 500: Internal Server Error
- 502: Bad gateway
- 503: Service unavailable
- 504: Gateway timed out

## Endpoints

#### GET /

- Serves the frontend React Application.

#### GET /api

- General

  - root endpoint
  - can also work to check if the api is up and running
  - is a public endpoint, requires no authentication

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api`

<details>
<summary>Sample Response</summary>

```

{
"apiVersion": 1.0
}

```

</details>

#### GET /api/characters

- General

  - gets the list of all the characters

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/characters`

<details>
<summary>Sample Response</summary>

```
{
    "characters": [
        {
            "character_name": "Sheldon",
            "gender": "Male",
            "id": 1
        },
        {
            "character_name": "Penny",
            "gender": "Female",
            "id": 2
        },
        {
            "character_name": "Lara Croft",
            "gender": "Female",
            "id": 3
        }
    ],
    "status_code": 200,
    "success": true
}

```

</details>

#### GET /api/characters/{character_id}

- General

  - gets the complete info for a character

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/characters/3`

<details>
<summary>Sample Response</summary>

```

{
    "character_full": {
            "age": 29,
            "character_name": "Lara Croft",
            "gender": "Female",
            "id": 3,
            "image": "https://i.pinimg.com/736x/e5/72/74/e57274ee35b529dff15958afe2ea77a9.jpg",
            "name": "Angelina Jolie",
            "shows": []
        },
        "status_code": 200,
        "success": true
}

```

</details>

#### POST /api/characters/

- General

  - creates a new character
  - requires `post:character` permission

- Request Body

  - name: string, required
  - character_name: string, required
  - age: integer
  - gender: string
  - image: string

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/characters`
  - Request Body
    ```
       {
        "name": "Kit Harrington",
        "character_name": "Jon Snow",
        "age": 32,
        "gender": "Male",
        "image": "https://got.com/jonsnow.jpg"
        }
    ```

<details>
<summary>Sample Response</summary>

```

{
    "character": {
        "character_name": "Jon Snow",
        "gender": "Male",
        "id": 6
    },
    "status_code": 200,
    "success": true
}

```

</details>

#### PATCH /api/characters/{character_id}

- General

  - updates the info for a character
  - requires `patch:character` permission

- Request Body

  - name: string, required
  - character_name: string, required
  - age: integer
  - gender: string
  - image: string

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/characters`
  - Request Body
    ```
       {
        "name": "Kit Harrington",
        "character_name": "Aegon Targaryen",
        "age": 35,
        "gender": "Male",
        "image": "https://got.com/jonsnow_newimage.jpg"
        }
    ```

<details>
<summary>Sample Response</summary>

````

{
    "character": {
        "character_name": "Aegon Targaryen",
        "gender": "Male",
        "id": 3
    },
    "status_code": 200,
    "success": true
}

```

</details>

#### DELETE /api/characters/{character_id}

- General

  - deletes the character
  - requires `delete:actor` permission

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/characters/2`

<details>
<summary>Sample Response</summary>

```

{
    "character_deleted": {
        "character_name": "Gollum",
        "gender": "Male",
        "id": 2
    },
    "status_code": 200,
    "success": true
}

```

</details>

#### GET /api/shows

- General

  - gets the list of all the shows
  - requires `get:shows` permission

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/shows`

<details>
<summary>Sample Response</summary>

```
{
    "shows": [
        {
            "id": 1,
            "show_type": "Series",
            "title": "Game of thrones"
        },
        {
            "id": 2,
            "show_type": "Movie",
            "title": "The Lord of the Rings"
        },
        {
            "id": 3,
            "show_type": "Series",
            "title": "How I met your mother"
        }
    ],
    "status_code": 200,
    "success": true
}
```

</details>

#### GET /api/shows/{show_id}

- General

  - gets the complete info for a show
  - requires `get:show-info` permission

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/shows/1`

<details>
<summary>Sample Response</summary>

```
{
    "show": {
        "cast": [],
        "categories": [],
        "id": 1,
        "rating": 9.9,
        "release_date": 2008,
        "show_description": "description for this series",
        "show_type": "Series",
        "title": "Breaking Bad"
    },
    "status_code": 200,
    "success": true
}

````

</details>

#### POST /api/shows

- General

  - creates a new show
  - requires `post:show` permission

- Request Body

  - title: string, required
  - show_type: string,
  - show_description: string, optional
  - release_date: integer
  - rating: float

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/shows`
  - Request Body
    ```
       {
            "title": "Fire and blood",
            "show_type": "Series",
            "show_description": "description for Game of thrones 2",
            "release_date": 2021,
            "rating": 4.5
        }
    ```

<details>
<summary>Sample Response</summary>

```

{
"showFull": {
        "cast": [],
        "categories": [],
        "id": 10,
        "rating": 4.5,
        "release_date": 2000,
        "show_description": "description for Game of thrones 2",
        "show_type": "Series",
        "title": "Fire and blood"
    },
    "status_code": 200,
    "success": true
}

```

</details>

#### PATCH /api/shows/{show_id}

- General

  - updates the info for a show
  - requires `patch:show` permission

- Request Body

  - title: string, optional
  - show_type: integer, optional
  - show_description: string, optional
  - release_date: integer, optional
  - rating: float, optional

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/shows/2`
  - Request Body
    ```
      {
        "title": "Castle",
        "show_type": "Series",
        "show_description": "Cool series description",
        "release_date": 2001,
        "rating": 4.5
     }
    ```

<details>
<summary>Sample Response</summary>

````
{
    "showFull": {
        "cast": [],
        "categories": [],
        "id": 2,
        "rating": 4.5,
        "release_date": 2001,
        "show_description": "Cool series description",
        "show_type": "Series",
        "title": "Castle"
    },
    "status_code": 200,
    "success": true
}

```

</details>

#### DELETE /api/shows/{show_id}

- General

  - deletes the show
  - requires `delete:show` permission

- Sample Request
  - `https://udacity-camgrafiman2.herokuapp.com/api/shows/10`

<details>
<summary>Sample Response</summary>

```

{
    "show_deleted": {
        "id": 10,
        "show_type": "Series",
        "title": "Fire and blood"
    },
    "status_code": 200,
    "success": true
}

```

</details>

## Testing

For testing the backend,
open the 'testdb.sql' change the admin user for your default one (postgres) for example
run the following commands (in the exact order):

```

dropdb finalproject
createdb finalproject
psql finalproject < testdb.sql
python test_app.py

```

Alternate way: Create the db `finalproject` using PgAdmin and copy the contents of testdb.sql and paste them
in Query tool in PgAdmin and create the db table with records. Then, run the command `python test_app.py`.
```
````
