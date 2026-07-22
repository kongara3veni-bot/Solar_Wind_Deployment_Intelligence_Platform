from sqlalchemy import Column, Integer, Float, String, DateTime
from datetime import datetime
from app.database.database import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    temperature = Column(Float)
    wind_speed = Column(Float)
    humidity = Column(Float)
    rainfall = Column(Float)
    prediction = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)