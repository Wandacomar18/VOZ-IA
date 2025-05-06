import numpy as np
import librosa

def analizar_audio(ruta_archivo):
    y, sr = librosa.load(ruta_archivo, sr=None)
    duracion = librosa.get_duration(y=y, sr=sr)
    energia = np.mean(np.square(y))
    return {
        "duracion_segundos": round(duracion, 2),
        "energia_media": round(energia, 5)
    }