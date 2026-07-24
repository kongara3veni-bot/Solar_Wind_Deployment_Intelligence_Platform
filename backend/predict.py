import joblib
import pandas as pd


# Load trained model
model = joblib.load("app/ml/model.pkl")


def predict_solar(
    temperature,
    wind_speed,
    humidity,
    rainfall
):

    input_data = pd.DataFrame(
        [[
            temperature,
            wind_speed,
            humidity,
            rainfall
        ]],
        columns=[
            "temperature",
            "wind_speed",
            "humidity",
            "rainfall"
        ]
    )

    prediction = model.predict(input_data)

    return prediction[0]