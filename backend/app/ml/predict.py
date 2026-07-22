import joblib
import numpy as np

model = joblib.load("app/ml/model.pkl")

def predict_energy(temperature, wind_speed, humidity, rainfall):
    data = np.array([[temperature, wind_speed, humidity, rainfall]])
    prediction = model.predict(data)
    return prediction[0]