from fastapi import APIRouter
from app.ml.predict import predict_energy

router = APIRouter(
    prefix="/prediction",
    tags=["Prediction"]
)


@router.get("/")
def prediction(
    temperature: float,
    wind_speed: float,
    humidity: float,
    rainfall: float
):
    # Get prediction from ML function
    result = predict_energy(
        temperature,
        wind_speed,
        humidity,
        rainfall
    )

    # Solar Recommendation
    if result == "Solar":
        return {
            "prediction": "Solar",
            "confidence": 96,
            "solar_score": 89,
            "wind_score": 24,
            "co2_saved": "2.5 Tons / Year",
            "annual_output": "5400 kWh",
            "tilt_angle": "24°",
            "panel_type": "Monocrystalline Solar Panel",
            "installation_cost": "₹2,50,000",
            "payback_period": "5 Years",
            "reason": [
                "High Temperature",
                "Low Rainfall",
                "Moderate Humidity",
                "Suitable Climate for Solar Energy"
            ],
            "recommendation": "Install south-facing solar panels for maximum energy generation."
        }

    # Wind Recommendation
    else:
        return {
            "prediction": "Wind",
            "confidence": 93,
            "solar_score": 38,
            "wind_score": 91,
            "co2_saved": "3.2 Tons / Year",
            "annual_output": "6200 kWh",
            "tilt_angle": "-",
            "panel_type": "Horizontal Axis Wind Turbine",
            "installation_cost": "₹4,20,000",
            "payback_period": "6 Years",
            "reason": [
                "High Wind Speed",
                "Low Humidity",
                "Low Rainfall",
                "Excellent Wind Conditions"
            ],
            "recommendation": "Install a horizontal-axis wind turbine in an open area."
        }