import { createContext, useState } from "react";

export const AuthContext = createContext();

// Crear un Provider: Este provider a proveer la variables y funciones
// que creemos
export const AuthProvider = (props) => {
  // La palabra children hace referencia a los components hijo
  // y este children viaja por props
  const { children } = props;

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? {}
  );

  function login(email, password) {
    // aca vamos a comparar con un usuario fake
    if (email !== "linder@gmail.com" || password !== "123456") return false;

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function logout() {
    localStorage.clear();
    setUser({});
    window.location.href = "/login";
  }

  // funcion para validar si la session existe
  function isAuth() {
    return Object.entries(user).length === 0;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
