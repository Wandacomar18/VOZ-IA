from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Literal
from starlette.status import HTTP_401_UNAUTHORIZED

router = APIRouter()

# Usuarios simulados
fake_users = {
    "admin@example.com": {"password": "admin123", "role": "admin"},
    "terapeuta@example.com": {"password": "terapeuta123", "role": "terapeuta"},
    "paciente@example.com": {"password": "paciente123", "role": "paciente"}
}

class LoginData(BaseModel):
    email: str
    password: str

@router.post("/login")
def login(data: LoginData):
    user = fake_users.get(data.email)
    if not user or user["password"] != data.password:
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Credenciales inválidas")
    return {"message": "Login exitoso", "role": user["role"], "email": data.email}