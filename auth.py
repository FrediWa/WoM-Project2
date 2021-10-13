import requests
import sys

def authenticate(jwt): 
    res = requests.post('https://wom-project-1.herokuapp.com/users/verify', headers = {"Authorization": "Bearer "+ jwt} )
    return (res.text == "verified")