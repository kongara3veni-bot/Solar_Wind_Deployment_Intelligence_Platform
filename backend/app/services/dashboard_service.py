from sqlalchemy.orm import Session
from app.models.user import User
from app.models.dataset import Dataset
from app.models.prediction import Prediction


def get_dashboard_statistics(db: Session):

    total_users = db.query(User).count()

    total_datasets = db.query(Dataset).count()

    total_predictions = db.query(Prediction).count()

    total_solar = db.query(Prediction).filter(
        Prediction.prediction == "Solar"
    ).count()

    total_wind = db.query(Prediction).filter(
        Prediction.prediction == "Wind"
    ).count()

    return {
        "users": total_users,
        "datasets": total_datasets,
        "predictions": total_predictions,
        "solar": total_solar,
        "wind": total_wind,
    }