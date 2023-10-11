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
from requests_oauthlib import OAuth2Session
from flask import Flask
from flask_cors import CORS

from colorama import Fore, Back, Style

sys.path.append('/usr/local/lib/python2.7/site-packages/')
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
load_dotenv()

SECRET = os.getenv("SECRET")
ID = os.getenv("ID")
URL = os.getenv("URL")
REDIR_URI = os.getenv("REDIRICT_URI")
USERNAME = os.getenv("USERNAME_1")
PASSWORD = os.getenv("PASSWORD_1")
PROJECT_NAME = os.getenv("PROJECT_NAME_1")

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

@app.route('/api/scrapedata', methods=['GET'])
def scrapedata():
    data = get_ins_data("Sunway_bgs")
    print("data: ", data)
    return jsonify({"message": data})

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

@app.route('/api/shortcode')
def get_shortcode():
    directory_path = "./data"  # Replace this with the path to your directory
    json_files = [f for f in os.listdir(directory_path) if f.endswith('.json')]

    if json_files:
        first_json_file = json_files[0]
        file_path = os.path.join(directory_path, first_json_file)

        with open(file_path, "r", encoding="utf-8") as json_file:
            data = json.load(json_file)
            return jsonify(data)
    else:
        return jsonify({"error": "No JSON files found in the specified directory"})

def get_42_access_token(client_id, client_secret, redirect_uri, code):
    # Step 3: Exchange the code for an access token
    token_url = "https://api.intra.42.fr/oauth/token"
    token_params = {
        "grant_type": "authorization_code",
        "client_id": client_id,
        "client_secret": client_secret,
        "code": code,
        "redirect_uri": redirect_uri,
    }

    # Make a POST request to exchange the code for an access token
    token_response = requests.post(token_url, token_params)

    if token_response.status_code == 200:
        # Parse the response JSON to get the access token
        token_data = token_response.json()
        access_token = token_data.get("access_token")
        return access_token
    else:
        print(f"Error exchanging code for access token: {token_response.status_code}")
        return None

def make_42_api_request(access_token, api_endpoint):
    # Step 4: Use the access token to make API requests
    headers = {
        "Authorization": f"Bearer {access_token}"
    }

    api_url = f"https://api.intra.42.fr/{api_endpoint}"

    # Make a GET request to the 42 API with the access token
    api_response = requests.get(api_url, headers=headers)

    if api_response.status_code == 200:
        # Parse and process the API response
        data = api_response.json()
        return data
    else:
        print(f"Error making API request: {api_response.status_code}")
        return None
    
@app.route('/api/postCode', methods=['POST'])
def postCode():
    global CODE
    CODE = request.json  # Get the JSON data sent from the frontend
    print("CODE: ", CODE)
    # You can return a response to acknowledge the received data
    return jsonify({"message": "Code received successfully"})


@app.route('/api/ft')
def ft_api():
    client_id = ID  # Replace with your actual client ID
    client_secret = SECRET  # Replace with your actual client secret
    redirect_uri = REDIR_URI # Replace with your actual redirect URI

    # Obtain the code from the query parameters
    code = CODE
    print("code: ", code)
    if code:
        access_token = get_42_access_token(client_id, client_secret, redirect_uri, code)
        if access_token:
            api_endpoint = "/v2/me"  # Replace with the desired API endpoint
            api_data = make_42_api_request(access_token, api_endpoint)
            if api_data:
                with open("./data/me.json", "w") as json_file:
                    json.dump(api_data, json_file, indent=4)  
                return jsonify(api_data), 200
        return "Failed to retrieve API data", 500
    return "Missing code parameter", 400
    
@app.route('/api/user/profilepic', methods=['GET'])
def get_profile_pic():
    json_file_path = './data/me.json'  # Replace with the actual JSON file path

    try:
        # Open and read the JSON file
        with open(json_file_path, 'r', encoding='utf-8') as json_file:
            user_data = json.load(json_file)

            # Check if the 'image' field exists in the JSON data
            if 'image' in user_data and 'versions' in user_data['image']:
                versions = user_data['image']['versions']

                # Check if the 'medium' version exists
                if 'medium' in versions:
                    medium_image_url = versions['medium']
                    print("image: ", type(medium_image_url))
                    return medium_image_url

    except FileNotFoundError:
        print(f'JSON file not found at path: {json_file_path}')
    except json.JSONDecodeError as e:
        print(f'Error decoding JSON: {e}')

    return None  # Return None if the URL is not found

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
    postCode()
