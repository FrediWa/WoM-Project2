from flask import Flask
from flask_restful import Api, Resource
from dotenv import load_dotenv
import os

load_dotenv()
# os.environ.get('TEST')

app = Flask(__name__)
api = Api(app)

class Services(Resource):
    def get(self):
        return {'message': "GET"}
    def post(self):
        return {'message': "POST"}
    def patch(self):
        return {'message': "PATCH"}
    def delete(self):
        return {'message': "DELETE"}
        
api.add_resource(HelloWorld, "/helloworld")


if __name__ == "__main__":
    app.run(debug=True)