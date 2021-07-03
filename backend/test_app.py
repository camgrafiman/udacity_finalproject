import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy
from app import create_app
from database.models import setup_db, db_drop_and_create_all, User, Category, Character, Show


class TestApp(unittest.TestCase):
    '''This class represents the test for the whole app '''

    def setUp(self):
        ''' Test variables from env and init the app '''
        #  for some reason os.environ.get is not working, I've had to insert the test tokens here:
        self.user_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkR4U2pQOVF3SzY1T1FsVWFsTjBfaSJ9.eyJpc3MiOiJodHRwczovL2Rldi14LWNhbWdyYWZpbWFuLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MGRlM2NhYzZjMDdlMTAwNjg3Y2ZiNzAiLCJhdWQiOiJmaW5hbHByb2plY3RhcGkiLCJpYXQiOjE2MjUzMzcwNjEsImV4cCI6MTYyNTM0NDI2MSwiYXpwIjoiNVpTOEtYbWd5YmFCM2NnQkdKOUtoWFp1eW9tdVR2blIiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImdldDpjYXRlZ29yaWVzIiwiZ2V0OmNoYXJhY3Rlci1pbmZvIiwiZ2V0OmNoYXJhY3RlcnMiLCJnZXQ6c2hvdy1pbmZvIiwiZ2V0OnNob3dzIl19.Y5pO0eL_Zq3_BM7msVTBKbPCysrwrNpMmonv_2_7QSgi7h8vsEsHJbvGYrAjyMeInhKnaN77__zywU-uSr-6d9HIA-8YWRq2Y8dj6A537cfJhh3rCT36Ai1sJYk8TIhcv4dtxzeyoO_B3WtiglijrXSmyRpMnCwoW5wxq_wAk3yQtj8UFD59Lz79LKuaoPDW-YezlQ4dkgHG4VohU23sbInC6jCCRFCoK-UStmScX6s4Np7n0ts0AIUxUXaI5EmhXS4IPhqkFHY6gkd0NMB84DwRh1MM0A-qhcaV_NXK0rP3lxCwv8mEEz9ofCPf0p5LQIhEpHHHzlW9QKCkjiRaWw'
        self.manager_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkR4U2pQOVF3SzY1T1FsVWFsTjBfaSJ9.eyJpc3MiOiJodHRwczovL2Rldi14LWNhbWdyYWZpbWFuLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MGRlN2IxNjNhYTI1YzAwNmFjOTY1YTIiLCJhdWQiOiJmaW5hbHByb2plY3RhcGkiLCJpYXQiOjE2MjUzMzcxMTcsImV4cCI6MTYyNTM0NDMxNywiYXpwIjoiNVpTOEtYbWd5YmFCM2NnQkdKOUtoWFp1eW9tdVR2blIiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImdldDpjYXRlZ29yaWVzIiwiZ2V0OmNoYXJhY3Rlci1pbmZvIiwiZ2V0OmNoYXJhY3RlcnMiLCJnZXQ6c2hvdy1pbmZvIiwiZ2V0OnNob3dzIiwicGF0Y2g6Y2F0ZWdvcmllcyIsInBhdGNoOmNoYXJhY3RlciIsInBhdGNoOnNob3ciLCJwb3N0OmNhdGVnb3JpZXMiLCJwb3N0OmNoYXJhY3RlciIsInBvc3Q6c2hvdyJdfQ.d1dcfse9l2ERU1CNmFp6fYR5mSYdkE2At9_HkcDQLTXLTpuQPBCzJVeEMDk8G3jhSLDIL2Bo1ncUYKjSkzFSYecUIsBCp9cg76Qdg-Pc88zygwQ3GsvX2870JDUgjK_-VZKo6qSaVc5JezRhcivvexIFmQNCFdBDTs9oyXKu6twKNQ_4Crn6cyTte60xzBASk4tKWJjOepEn8myTRTH5f-Z1LlUn-4t62YqJyp6ocUP_HHGWEZm9cyo_g1xjRdb6g3Enri6TabiisWhjTMCky09IdR8SjpwupPUM1eAHN0fcjWpSETo3JYrfXIrFBcUiIyvDI06YzpUxABz7eNZlnQ'
        self.admin_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkR4U2pQOVF3SzY1T1FsVWFsTjBfaSJ9.eyJpc3MiOiJodHRwczovL2Rldi14LWNhbWdyYWZpbWFuLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MGRmMGQ5YjMwNjE3MDAwNmExZGE1MTMiLCJhdWQiOiJmaW5hbHByb2plY3RhcGkiLCJpYXQiOjE2MjUzMzcxNTQsImV4cCI6MTYyNTM0NDM1NCwiYXpwIjoiNVpTOEtYbWd5YmFCM2NnQkdKOUtoWFp1eW9tdVR2blIiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImRlbGV0ZTpjYXRlZ29yaWVzIiwiZGVsZXRlOmNoYXJhY3RlciIsImRlbGV0ZTpzaG93IiwiZ2V0OmNhdGVnb3JpZXMiLCJnZXQ6Y2hhcmFjdGVyLWluZm8iLCJnZXQ6Y2hhcmFjdGVycyIsImdldDpzaG93LWluZm8iLCJnZXQ6c2hvd3MiLCJwYXRjaDpjYXRlZ29yaWVzIiwicGF0Y2g6Y2hhcmFjdGVyIiwicGF0Y2g6c2hvdyIsInBvc3Q6Y2F0ZWdvcmllcyIsInBvc3Q6Y2hhcmFjdGVyIiwicG9zdDpzaG93Il19.VgpPT_1KVgiIBkOnncyDCQbn9tiAc8DLGOXgh2OK5wwOxXUC6iuUw3v8LAkl8OzLOWYnRoN6Q92DZSwj5ijqlsloCpwdDhwBQG9cZQRH6Ex9sa8K0W2sr0LAOK3GVEV0jg_gy21QYrcgiivwPwhkxzLAGTUlg1dGeF6WOolUftkmd2tPVnkv8hxGTGaUor2CX2-80gePo9YLJsWmqonDk8_Pvyx8cE4d0gT2usCPObZCSgDNJp0vFfLHTvB5oyF0HvLpPc2X1hJR9ngCz1Eun5-PqxQlfmFFBhVGT2J-ALa27Lxcd-0lbhduV2mv_Z9MpbhyLa8TVodV7jAoPBLu8A'
        self.app = create_app()
        self.client = self.app.test_client
        setup_db(self.app)

        self.VALID_NEW_CATEGORY = {
            "cat_type": "Trailer"
        }
        self.INVALID_NEW_CATEGORY = {
            "category": "Series"
        }

        self.VALID_NEW_CHARACTER = {
            "name": "Henry Cavill",
            "character_name": "Superman",
            "age": 38,
            "gender": "Male",
            "image": "https://elfinalde.s3-accelerate.amazonaws.com/2016/03/qDJ3TIIHnaE9x6GUt9QlDXi3KRZ.jpg"
        }
        self.INVALID_NEW_CHARACTER = {
            "character_name": "Superman",
            "age": 38,
            "gender": "Male"
        }
        self.VALID_UPDATE_CHARACTER = {
            "name": "Christian Bale",
            "character_name": "The Dark Knight",
            "age": 47,
            "gender": "Male",
            "image": "https://elfinalde.s3-accelerate.amazonaws.com/2016/03/qDJ3TIIHnaE9x6GUt9QlDXi3KRZ.jpg"
        }
        self.INVALID_UPDATE_CHARACTER = {
            "name": "Christian Bale2",
        }
        self.VALID_NEW_SHOW = {
            "title": "Fire and blood",
            "show_type": "Series",
            "show_description": "description for Game of thrones precquel",
            "release_date": 2021,
            "rating": 4.2
        }
        self.INVALID_NEW_SHOW = {
            "title": "Fire and blood",
            "show_type": "Series"
        }
        self.VALID_UPDATE_SHOW = {
            "title": "Superman V Batman",
            "show_type": "Movie",
            "show_description": "A movie where Batman hits Superman",
            "release_date": 2017,
            "rating": 4.1
        }
        self.INVALID_UPDATE_SHOW = {}

        # binds the app to the current context:
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # Create all tables:
            self.db.create_all()

    def tearDown(self):
        '''Executed after reach test '''
        pass

    def test_health(self):
        '''Test for GET /api main endpoint '''
        res = self.client().get('/api/')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertIn('apiVersion', data)
        self.assertEqual(data['apiVersion'], 1.0)

    def test_api_without_token(self):
        '''Failing test due to token is missing'''
        res = self.client().get('/api/characters')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)
        self.assertFalse(data['success'])
        self.assertEqual(
            data['message']['code'], 'authorization_header_missing')

    def test_get_characters(self):
        ''' Passing a token to GET /api/characters '''
        res = self.client().get('/api/characters', headers={
            'Authorization': 'Bearer {}'.format(self.manager_token)
        })
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(len(data))
        self.assertTrue(data['success'])
        self.assertIn('characters', data)
        self.assertTrue(len(data['characters']))

    def test_get_character_info(self):
        '''Passing test for GET /api/characters/<character_id> '''
        res = self.client().get('/api/characters/1', headers={
            'Authorization': 'Bearer {}'.format(self.user_token)
        })
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(data['success'])
        self.assertIn('character', data)
        self.assertIn('character_name', data['character'])

    def test_404_get_character_by_id(self):
        '''Fail test for GET a non existing character /api/characters/100 '''
        res = self.client().get('/api/characters/100', headers={
            'Authorization': 'Bearer {}'.format(self.user_token)
        })
        data = json.loads(res.data)
        self.assertEqual(res.status_code, 404)
        self.assertFalse(data['success'])
        self.assertIn('message', data)

    def test_create_character_with_user_token(self):
        '''Failing post because user has no permission to post '''
        res = self.client().post('/api/characters', headers={
            'Authorization': 'Bearer {}'.format(self.user_token)
        }, json=self.VALID_NEW_CHARACTER)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 403)
        self.assertFalse(data['success'])
        self.assertIn('message', data)

    def test_create_character_with_manager_token(self):
        '''Not failing because Manager has permission to post '''
        res = self.client().post('/api/characters', headers={
            'Authorization': 'Bearer {}'.format(self.manager_token)
        }, json=self.VALID_NEW_CHARACTER)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(data['success'])
        self.assertIn('character', data)

    def test_create_character_with_manager_token_invalid_json(self):
        '''Failing post because json has not valid values '''
        res = self.client().post('/api/characters', headers={
            'Authorization': 'Bearer {}'.format(self.manager_token)
        }, json=self.INVALID_NEW_CHARACTER)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 422)
        self.assertFalse(data['success'])
        self.assertIn('message', data)

    def test_update_character_with_manager_token(self):
        '''Not failing because Manager has permission to patch '''
        res = self.client().patch('/api/characters/1', headers={
            'Authorization': 'Bearer {}'.format(self.manager_token)
        }, json=self.VALID_UPDATE_CHARACTER)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(data['success'])
        self.assertIn('character', data)

    def test_delete_character_with_admin_token(self):
        '''Admin can delete '''
        res = self.client().delete('/api/characters/1', headers={
            'Authorization': 'Bearer {}'.format(self.admin_token)
        })
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(data['success'])

    def test_get_shows(self):
        '''get shows as an user '''
        res = self.client().get('/api/shows', headers={
            'Authorization': 'Bearer {}'.format(self.user_token)
        })
        data = json.loads(res.data)
        self.assertEqual(res.status_code, 200)
        self.assertTrue(len(data))
        self.assertTrue(data['success'])
        self.assertIn('shows', data)

    def test_update_show_user(self):
        '''Fail because user has not permission '''
        res = self.client().patch('/api/shows/1', headers={
            'Authorization': 'Bearer {}'.format(self.user_token)
        }, json=self.VALID_UPDATE_SHOW)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 403)
        self.assertFalse(data['success'])
        self.assertIn('message', data)

    def test_update_show_manager(self):
        '''update a show by id as a manager '''
        res = self.client().patch('/api/shows/1', headers={
            'Authorization': 'Bearer {}'.format(self.manager_token)
        }, json=self.VALID_UPDATE_SHOW)
        data = json.loads(res.data)
        self.assertEqual(res.status_code, 200)
        self.assertTrue(len(data))
        self.assertTrue(data['success'])
        self.assertIn('showFull', data)

    def test_delete_show_manager(self):
        '''Failing because manager can't delete shows '''
        res = self.client().delete('/api/shows/1', headers={
            'Authorization': 'Bearer {}'.format(self.manager_token)
        })
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 403)
        self.assertFalse(data['success'])
        self.assertIn('message', data)


# Test executable
if __name__ == "__main__":
    unittest.main()
