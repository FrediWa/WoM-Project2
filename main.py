from flask import Flask
from flask_restful import Api, Resource
from dotenv import load_dotenv
import os

load_dotenv()
# os.environ.get('TEST')


app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'message': "Hello World"}
        

api.add_resource(HelloWorld, "/helloworld")


if __name__ == "__main__":
    app.run(debug=True)