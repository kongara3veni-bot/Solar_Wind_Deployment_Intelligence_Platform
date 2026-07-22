from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime

from app.database.database import Base


class Dataset(Base):
    __tablename__ = "datasets"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String(255), nullable=False)

    filepath = Column(String(255), nullable=False)

    uploaded_by = Column(Integer, ForeignKey("users.id"))

    upload_time = Column(DateTime, default=datetime.utcnow)