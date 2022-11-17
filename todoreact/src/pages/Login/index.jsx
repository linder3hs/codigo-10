import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import "./index.css";

const Login = () => {
  const { login, isAuth } = useContext(AuthContext);

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
    //* Entonces si ambos campos estan llenos vamos a guardarlos en localStorage
    const inicio = login(user.email, user.password);

    if (!inicio) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o password erroneos",
      });
    }
  };

  if (isAuth()) {
    return <Navigate to="/" />;
  }

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
            <Box my={3}>
              <TextField
                mt={3}
                size="small"
                fullWidth
                type="text"
                label="Email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </Box>
            <Box my={3}>
              <TextField
                mt={3}
                size="small"
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
            </Box>
            <Box my={3}>
              <Button variant="contained" fullWidth onClick={handleLogin}>
                Ingresar
              </Button>
            </Box>
            <Box my={3}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                component={Link}
                to="/signup"
              >
                Registro
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
