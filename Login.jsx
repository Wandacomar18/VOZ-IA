import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch("https://voxtherapy-backend.onrender.com/auth/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      alert("Login exitoso como " + data.role);
      onLogin(data);
    } else {
      alert("Error: " + data.detail);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}