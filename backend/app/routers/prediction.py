from fastapi import APIRouter
from predict import predict_solar

router = APIRouter()


@router.get("/predict")
def predict(
    temperature: float,
    wind_speed: float,
    humidity: float,
    rainfall: float
):

    result = predict_solar(
        temperature,
        wind_speed,
        humidity,
        rainfall
    )

    return {
        "status": "success",
        "prediction": result
    }