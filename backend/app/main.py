from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine

# Import Models
from app.models import user
from app.models import project
from app.models import dataset


# Import Routers
from app.routers import auth
from app.routers import project as project_router
from app.routers import dataset
from app.routers import prediction
from app.routers import dashboard
from app.routers.analytics import router as analytics_router


# Create database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Solar Wind Deployment Intelligence Platform",
    version="1.0.0"
)


# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include Routers

app.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"]
)

app.include_router(
    project_router.router,
    prefix="/projects",
    tags=["Projects"]
)

app.include_router(
    dataset.router,
    prefix="/datasets",
    tags=["Datasets"]
)

app.include_router(
    prediction.router,
    prefix="/prediction",
    tags=["Prediction"]
)

app.include_router(
    dashboard.router,
    tags=["Dashboard"]
)

app.include_router(
    analytics_router,
    tags=["Analytics"]
)


@app.get("/")
def home():
    return {
        "message": "Solar Wind Deployment Intelligence Platform API is Running Successfully"
    }