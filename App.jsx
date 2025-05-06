import { useState } from "react";
import Login from "./pages/auth/Login";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;
  return <div>Bienvenido, {user.email} (rol: {user.role})</div>;
}

export default App;