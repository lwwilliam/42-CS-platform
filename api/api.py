from flask import Flask, jsonify, request
from backend.data_handler import get_ins_data
import csv
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
    with open("data.json", "r") as json_file:
        data = json.load(json_file)
    sc = [entry["shortcode"] for entry in data]
    return jsonify({"shortcode": sc})


if __name__ == '__main__':
    app.run(debug=True)
    scrapedata()
