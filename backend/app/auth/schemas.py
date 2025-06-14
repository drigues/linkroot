from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str  # ✅ NEW
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    name: str  # ✅ NEW
    email: EmailStr

    class Config:
        from_attributes = True  # ensures compatibility with SQLAlchemy models

class Token(BaseModel):
    access_token: str
    token_type: str
