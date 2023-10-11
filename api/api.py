from flask import Flask, jsonify, request
from backend.data_handler import get_ins_data
import csv
import os
from flask_cors import CORS
import json
from pymongo import MongoClient
from bson import ObjectId
from oauthlib.oauth2 import BackendApplicationClient
from dotenv import load_dotenv
import sys
import requests

from colorama import Fore, Back, Style

sys.path.append('/usr/local/lib/python2.7/site-packages/')
from requests_oauthlib import OAuth2Session

load_dotenv()

SECRET = os.getenv("SECRET")
ID = os.getenv("ID")
URL = os.getenv("URL")
REDIR_URI = os.getenv("REDIRICT_URI")
USERNAME = os.getenv("USERNAME_1")
PASSWORD = os.getenv("PASSWORD_1")
PROJECT_NAME = os.getenv("PROJECT_NAME_1")
SHORTCODE = []


payload = {
    'grant_type': 'client_credentials',
    'client_id': ID,
    'client_secret': SECRET
}

app = Flask(__name__)
CORS(app) 

# MONGO_URI = 'mongodb+srv://${USERNAME}:${PASSWORD}@${PROJECT_NAME}.sbk43zn.mongodb.net/?retryWrites=true&w=majority'

@app.route('/api/clubdata', methods=['GET'])
def clubdata():
    client = MongoClient("mongodb+srv://"+USERNAME+":"+PASSWORD+"@"+PROJECT_NAME+".sbk43zn.mongodb.net/?retryWrites=true&w=majority")  # MongoDB connection URL
    db = client['Club-Info']
    collection = db['Club-Info']
    data = list(collection.find({}))

    # Convert ObjectId to string in each document
    for item in data:
        item['_id'] = str(item['_id'])  # Convert ObjectId to string

    client.close()  # Close the MongoDB connection when done
    return jsonify({"message": data})


@app.route('/api/userinfo/', methods=['GET'])
def userinfo():
    client = MongoClient("mongodb+srv://"+USERNAME+":"+PASSWORD+"@"+PROJECT_NAME+".sbk43zn.mongodb.net/?retryWrites=true&w=majority")  # MongoDB connection URL
    db = client['User-Info']
    collection = db['User-Info']
    data = list(collection.find({}))

    for item in data:
        item['_id'] = str(item['_id'])

    client.close()
    return jsonify({"message": data})


@app.route('/api/scrapedata', methods=['GET'])
def scrapedata():
    json = clubdata().get_json();
    category = json['message'][0]['Category']

    for cat in category:
        for clubs in cat['Clubs']:
            data = get_ins_data(clubs['Instagram_username'], clubs['Name'])
            print("data: ", data)

@app.route('/api/writedata', methods=['POST'])
def writedata():
    print("request to write")
    data = request.json  # Get the JSON data sent from the frontend

    # Write the data to a CSV file
    with open('data/form_data.csv', 'a', newline='') as csvfile:
        fieldnames = ['Club', 'Name', 'studentID', 'contactNumber', 'gender']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        # If the file doesn't exist yet, write the header row
        if csvfile.tell() == 0:
            writer.writeheader()

        writer.writerow(data)  # Write the form data to the CSV file

    return jsonify({"message": "Data written to CSV file."})

def shotcode_gen(file):
    with open( "./data/" + file + ".json", 'r') as json_file:
        data = json.load(json_file)
        edge = data['edge_owner_to_timeline_media']['edges']
        for i in range(len(edge)):
            if i == 5:
                break
            SHORTCODE.append(edge[i]['node']['shortcode'])

@app.route('/api/shortcode/<string:param>/', methods=['GET'])
def get_shortcode(param):
    SHORTCODE.clear()
    if param == "all":
        json = clubdata().get_json();
        category = json['message'][0]['Category']
        for cat in category:
            for clubs in cat['Clubs']:
                shotcode_gen(clubs['Name'])
        # print("shortcode: ", SHORTCODE)
    else:
        json = userinfo().get_json();
        user = json['message'][0]['Users']
        for club in user:
            if club['User_ID'] == param:
                for joined in club['Joined_club']:
                    shotcode_gen(joined)
                # print("shortcode: ", SHORTCODE)
    # print("shortcode: ", sorted(SHORTCODE))
    return jsonify({"message": sorted(set(SHORTCODE), reverse=True)})

@app.route('/api/ft')
def ft_api():
    client = BackendApplicationClient(client_id=ID)
    oauth = OAuth2Session(client=client)

    # Get an access token
    token = oauth.fetch_token(
        token_url=URL,
        client_id=ID,
        client_secret=SECRET,
        include_client_id=True
    )

    # Print the access token
    print(token)
    with open("data/token.json", "w") as json_file:
        json.dump(token, json_file, indent=4)
    headers = {"Authorization": "Bearer " + token['access_token']}
    cursus_reaponse = requests.get("https://api.intra.42.fr/v2/cursus", headers=headers)
    if cursus_reaponse.status_code == 200:
        cursus_data = cursus_reaponse.json()
        return jsonify(cursus_data)
    else:
        return jsonify({"error": "Something went wrong"}, cursus_reaponse.status_code)
    

# Endpoint to provide authentication configuration
@app.route('/api/auth/config', methods=['GET'])
def get_auth_config():
    print(REDIR_URI)
    auth_config = {
        'clientID': ID,
        'redirectURI': REDIR_URI,
    }
    print("UID: ", ID)
    print("REDIR_URI: ", REDIR_URI)
    print(auth_config)
    return (auth_config)

if __name__ == '__main__':
    app.run(debug=True)
    scrapedata()
    get_shortcode()
