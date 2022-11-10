import { useState } from "react";
import Swal from "sweetalert2";
import "./index.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    // null - undefinded - ""
    if (!user.email || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Completa el correo y password",
        icon: "error",
      });
      return;
    }
  };

  return (
    <div className="bg__login">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
        }}
      >
        <div
          className="card text-center p-3"
          style={{
            width: 400,
          }}
        >
          <div className="my-3">
            <h1>Login</h1>
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Ingrese su email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              className="form-control mt-4"
              placeholder="Ingrese su password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            <div className="d-grid">
              <button
                className="btn btn-outline-primary mt-4"
                onClick={handleLogin}
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
