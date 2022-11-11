import { AuthProvider } from "./context/AuthContext";
import Router from "./routes";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
