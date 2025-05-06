from fastapi import FastAPI
from app.auth.routes import router as auth_router

app = FastAPI()

@app.get("/")
def home():
    return {"mensaje": "Bienvenido a VoxTherapy AI"}

app.include_router(auth_router, prefix="/auth")