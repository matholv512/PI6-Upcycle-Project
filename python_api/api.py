from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
from tensorflow.keras.preprocessing import image
import io
import base64
import os
import h5py
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/classify": {"origins": "*"}}, supports_credentials=True)

script_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(script_dir, 'ClassificadorDeReciclaveis.h5')

with h5py.File(model_path, 'r') as file:
    model = load_model(file, compile=False)

@app.route('/classify', methods=['POST'])
def classify_image():
    try:
        data = request.json
        image_data = data.get('image')

        if image_data:
            img = Image.open(io.BytesIO(base64.b64decode(image_data['base64'])))
            img = img.resize((320, 320))
            img = image.img_to_array(img)
            img = np.expand_dims(img, axis=0)
            prediction = model.predict(img)
            predicted_class = int(np.argmax(prediction))

            return jsonify({'class': predicted_class})
        else:
            return jsonify({'error': 'No image data found in the request.'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
