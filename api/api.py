from flask import Flask, jsonify
from backend.data_handler import get_ins_data
import time

app = Flask(__name__)

@app.route('/api/scrapedata', methods=['GET'])

def scrapedata():
    # time.sleep(1)
    data = get_ins_data("sunwaymusicsociety")
    # time.sleep(1)
    return jsonify({"message": data})

