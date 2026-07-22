from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.prediction import Prediction

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)

@router.get("/")
def analytics(db: Session = Depends(get_db)):

    total = db.query(Prediction).count()

    solar = db.query(Prediction).filter(
        Prediction.prediction == "Solar"
    ).count()

    wind = db.query(Prediction).filter(
        Prediction.prediction == "Wind"
    ).count()

    return {
        "total_predictions": total,
        "solar_predictions": solar,
        "wind_predictions": wind
    }