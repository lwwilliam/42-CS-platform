from flask import Flask, jsonify, request
from backend.data_handler import get_ins_data
import csv
import os
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app) 

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

if __name__ == '__main__':
    app.run(debug=True)
    scrapedata()
    get_shortcode()
