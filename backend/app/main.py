from fastapi import FastAPI

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