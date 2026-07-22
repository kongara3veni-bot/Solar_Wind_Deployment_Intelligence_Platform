from datetime import datetime, timedelta
from jose import jwt

# Secret key (change this in production)
SECRET_KEY = "solarwind_secret_key_123"

# JWT Algorithm
ALGORITHM = "HS256"

# Token Expiry Time
ACCESS_TOKEN_EXPIRE_MINUTES = 60


def create_access_token(data: dict):
    """
    Create JWT Access Token
    """
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return encoded_jwt