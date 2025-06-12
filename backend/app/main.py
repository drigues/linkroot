from fastapi import FastAPI

app = FastAPI()

@app.get("/ping")
def ping():
    return {"msg": "pong pong"}

@app.get("/check-directory")
def check_directory(slug: str):
    # Simulated response: treat "thiago" as already taken
    return {"available": slug.lower() != "thiago"}

@app.get("/")
def root():
    return {"status": "FastAPI backend is running! OMGOSH!"}