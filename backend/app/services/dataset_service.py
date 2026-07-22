import os
import shutil
from fastapi import UploadFile
from sqlalchemy.orm import Session

from app.models.dataset import Dataset


UPLOAD_FOLDER = "uploads"


def upload_dataset(db: Session, file: UploadFile, uploaded_by: int):

    # Create uploads folder if it doesn't exist
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    # File path
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Save details in database
    dataset = Dataset(
        filename=file.filename,
        filepath=file_path,
        uploaded_by=uploaded_by
    )

    db.add(dataset)
    db.commit()
    db.refresh(dataset)

    return dataset