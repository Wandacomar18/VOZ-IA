import { useState } from "react";
import Login from "./pages/auth/Login";
import Analysis from "./pages/Analysis";
import Charts from "./pages/Charts";

function App() {
  const [user, setUser] = useState(null);
  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <h3>Bienvenido, {user.email} (rol: {user.role})</h3>
      <Analysis />
      <Charts />
    </div>
  );
}

export default App;