from fastapi import FastAPI
from sqlalchemy import create_engine, text
import os

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)

# Optional: test connection
with engine.connect() as connection:
    result = connection.execute(text("SELECT 1"))
    print("Database connected:", result.fetchone())

app = FastAPI()

@app.get("/ping")
def ping():
    return {"msg": "pong"}

@app.get("/check-directory")
def check_directory(slug: str):
    return {"available": slug.lower() != "thiago"}

@app.get("/")
def root():
    return {"status": "ok"}