from flask import Flask, jsonify
from backend.data_handler import get_ins_data

app = Flask(__name__)

@app.route('/api/scrapedata', methods=['GET'])

def scrapedata():
    data = get_ins_data("Sunway_bgs")
    print("data: ", data)
    return jsonify({"message": data})

