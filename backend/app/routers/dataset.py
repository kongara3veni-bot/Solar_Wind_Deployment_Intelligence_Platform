from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.schemas.dataset_schema import DatasetResponse
from app.services.dataset_service import upload_dataset
from app.services.csv_service import read_csv

router = APIRouter(
    prefix="/dataset",
    tags=["Dataset"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/upload", response_model=DatasetResponse)
def upload_file(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    return upload_dataset(db, file, uploaded_by=1)


@router.post("/read")
def read_uploaded_csv(file: UploadFile = File(...)):
    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())

    return read_csv(file_path)