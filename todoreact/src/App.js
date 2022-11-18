import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import Router from "./routes";

function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <Router />
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
