from flask import Flask, request
from flask_restful import Api, Resource
from dotenv import load_dotenv
import os, sys
from sqlalchemy import create_engine
import requests
from auth import authenticate

load_dotenv()

db_uri = os.environ.get('DB_URI')

db = create_engine(db_uri)

app = Flask(__name__)
api = Api(app)

db.execute("CREATE TABLE IF NOT EXISTS services (id serial NOT NULL primary key, service varchar(20) NOT NULL, description varchar(300), cost smallint NOT NULL);")  
db.execute("CREATE TABLE IF NOT EXISTS orders (id serial NOT NULL primary key, service smallint NOT NULL, star_date timestamp, end_date timestamp);")  

class Services(Resource):
    def get(self):
        query_results = db.execute("SELECT json_agg(services) FROM services")
        results_array = []
        for row in query_results:
            for entry in row:
                results_array.append(entry)
        return{"Results":results_array}
    def post(self):
        req_body = request.get_json()
        print(req_body, file=sys.stderr)
        sql_query = "INSERT INTO services(service, description, cost) VALUES ('{service}', '{desc}', '{cost}')".format(service = req_body["service"], desc = req_body["description"], cost = req_body["cost"])
        db.execute(sql_query)
        return {"message":'POST'}
    def patch(self):
        update_string = ""
        req_body = request.get_json()
        update_keys = list(req_body.keys())
        for i in range(1, len(req_body)):
            # Add key/value pairs and commas after all entries but the last
            update_string += (update_keys[i] + "='"+str(req_body[update_keys[i]])+"'"+(", " if i != len(req_body)-1 else " "))
        sql_query = "UPDATE services SET "+update_string+"WHERE id='"+str(req_body['id'])+"';"
        db.execute(sql_query)
        return {'message': "PATCH"}
    def delete(self):
        req_body = request.get_json()
        sql_query = "DELETE FROM services WHERE id='"+str(req_body['id'])+"';"
        db.execute(sql_query)
        return {'message': "DELETE"}
    
class Orders(Resource):
    def get(self):
        jwt = request.headers["Authorization"].split()[1]
        if authenticate(jwt):
            print("Authenticated", file=sys.stderr)
    def post(self):
        jwt = request.headers["Authorization"].split()[1]
        if authenticate(jwt):
            print("Authenticated", file=sys.stderr)
    def patch(self):
        jwt = request.headers["Authorization"].split()[1]
        if authenticate(jwt):
            print("Authenticated", file=sys.stderr)
    def delete(self):
        jwt = request.headers["Authorization"].split()[1]
        if authenticate(jwt):
            print("Authenticated", file=sys.stderr)

api.add_resource(Services, "/services")        
api.add_resource(Orders, "/orders")


if __name__ == "__main__":
    app.run(debug=True)