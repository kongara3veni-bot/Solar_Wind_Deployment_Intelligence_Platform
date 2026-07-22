from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.database.database import Base

class Site(Base):
    __tablename__ = "sites"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"))
    latitude = Column(Float)
    longitude = Column(Float)
    region = Column(String(100))
    elevation = Column(Float)
    land_area = Column(Float)