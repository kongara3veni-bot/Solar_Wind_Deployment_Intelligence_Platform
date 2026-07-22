from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.base import get_db
from app.schemas.project_schema import ProjectCreate
from app.services.project_service import (
    create_project,
    get_projects
)

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)


@router.get("/")
def read_projects(db: Session = Depends(get_db)):
    return get_projects(db)


@router.post("/")
def add_project(
    project: ProjectCreate,
    db: Session = Depends(get_db)
):
    return create_project(db, project)