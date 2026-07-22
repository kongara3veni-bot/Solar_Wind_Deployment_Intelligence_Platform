from pydantic import BaseModel
from datetime import datetime


class DatasetResponse(BaseModel):
    id: int
    filename: str
    filepath: str
    uploaded_by: int
    upload_time: datetime

    class Config:
        from_attributes = True