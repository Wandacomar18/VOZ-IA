from fastapi import APIRouter, UploadFile, File
from app.analysis.audio_processor import analizar_audio

router = APIRouter()

@router.post("/analizar-audio/")
async def analizar(file: UploadFile = File(...)):
    contenido = await file.read()
    archivo_temp = f"/tmp/{file.filename}"
    with open(archivo_temp, "wb") as f:
        f.write(contenido)
    resultados = analizar_audio(archivo_temp)
    return {"resultados": resultados}