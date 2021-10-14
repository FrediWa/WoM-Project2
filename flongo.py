import requests, sys
from flask import request

def authenticate(jwt): 
    res = requests.post('https://wom-project-1.herokuapp.com/users/verify', headers = {"Authorization": "Bearer "+ jwt} )
    return (res.text == "verified")

def authorizeCabin(jwt, cabinId):
    res = requests.get('https://wom-project-1.herokuapp.com/cabins/owned', headers = {"Authorization": "Bearer "+ jwt} )
    res_json = res.json()
    for cabin in res_json:
        if cabin["_id"] == cabinId:
            return True
    
   
    
    