import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app import models
from app.auth.routes import router as auth_router
from app.db import database
from app.db.database import Base, engine

# Create all tables
Base.metadata.create_all(bind=engine)

# Initialize app
app = FastAPI()

# CORS middleware (critical for frontend integration)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://linkroot-sepia.vercel.app",  # 🔁 Change if you deploy under a different domain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth_router)

# DB session dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Basic test route
@app.get("/ping")
def ping():
    return {"msg": "pong"}

# Manual test endpoints (optional)
@app.get("/users")
def read_users(db: Session = Depends(get_db)):
    return db.query(models.User).all()

@app.post("/users")
def create_user(name: str, email: str, db: Session = Depends(get_db)):
    if db.query(models.User).filter(models.User.email == email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = models.User(name=name, email=email)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
