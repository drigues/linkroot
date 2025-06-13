from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt, JWTError
import os

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Default fallback values for safety
SECRET_KEY = os.getenv("SECRET_KEY", "insecure-dev-secret-key")
ALGORITHM = os.getenv("ALGORITHM", "HS256")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=30))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token: str):
    try:
        return jwt.decode(token, SECRET_KEY, algorithm=ALGORITHM)
    except JWTError:
        return None
