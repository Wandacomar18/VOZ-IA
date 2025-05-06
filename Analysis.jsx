import { useState } from "react";

export default function Analysis() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const upload = async () => {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("https://voxtherapy-backend.onrender.com/analizar-audio/", {
      method: "POST",
      body: form
    });
    const data = await res.json();
    setResult(data.resultados);
  };

  return (
    <div>
      <h2>Análisis de voz</h2>
      <input type="file" accept="audio/*" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Subir y analizar</button>
      {result && (
        <div>
          <p>Duración: {result.duracion_segundos} segundos</p>
          <p>Energía media: {result.energia_media}</p>
        </div>
      )}
    </div>
  );
}