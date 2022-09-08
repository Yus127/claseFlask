import numpy as np
import pickle
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))


@app.route('/')
def home():
    return 'HOME'

@app.route('/predict',methods=['POST'])
def predict():
    resp = request.get_json()
    val1 = resp['sepalLength']
    val2 = resp['sepalWidth']
    val3 = resp['petalLength']
    val4 = resp['petalWidth']

    features = [val1, val2, val3, val4]
    final_features = np.array(features).reshape(1, -1)
    prediction = model.predict(final_features)
    return(prediction)
    

if __name__ == "__main__":
    app.run('127.0.0.1')