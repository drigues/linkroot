from fastapi import FastAPI
from sqlalchemy import create_engine
import os
from contextlib import asynccontextmanager

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)

@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        with engine.connect() as connection:
            result = connection.execute("SELECT 1")
            print("✅ Database connected:", result.fetchone())
    except Exception as e:
        print("❌ Database connection failed:", str(e))
    yield  # App runs here
    # Optional cleanup code after app shuts down

app = FastAPI(lifespan=lifespan)

@app.get("/ping")
def ping():
    return {"msg": "pong"}

@app.get("/check-directory")
def check_directory(slug: str):
    return {"available": slug.lower() != "thiago"}

@app.get("/")
def root():
    return {"status": "ok"}