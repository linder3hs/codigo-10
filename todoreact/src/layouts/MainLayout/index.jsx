import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const history = useNavigate();

  const validateIsLogged = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) history("/login");
  };

  useEffect(() => {
    validateIsLogged();
  }, []);

  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
