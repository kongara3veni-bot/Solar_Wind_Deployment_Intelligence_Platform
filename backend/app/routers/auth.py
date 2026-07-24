from fastapi import APIRouter
from app.schemas.user_schema import UserRegister, UserLogin

router = APIRouter(
    tags=["Authentication"]
)


@router.post("/register")
def register(user: UserRegister):
    return {
        "message": "User Registered Successfully",
        "user": user
    }


@router.post("/login")
def login(user: UserLogin):
    return {
        "message": "Login Successful",
        "email": user.email
    }