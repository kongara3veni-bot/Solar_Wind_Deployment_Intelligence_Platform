from sqlalchemy.orm import Session

from app.models.project import Project
from app.schemas.project_schema import ProjectCreate


def create_project(db: Session, project: ProjectCreate):
    new_project = Project(
        project_name=project.project_name,
        description=project.description,
        created_by=1
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return new_project


def get_projects(db: Session):
    return db.query(Project).all()