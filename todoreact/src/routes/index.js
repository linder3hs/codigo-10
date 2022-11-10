// Paso1: Importar los componentes de React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas2: Importar nuestras vistas
import { HomeView, ProfileView, TaskView, LoginView } from "../pages";
import { MainLayout } from "../layouts";

// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/perfil" element={<ProfileView />} />
          <Route path="/task/:id" element={<TaskView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
