// Funcional Component
import { FC, ChangeEvent, useState } from "react";
import Header from "./components/Header";
import "./App.css";

interface User {
  id: number;
  name: string;
  last_name: string;
  is_admin: boolean;
}

interface Formulario {
  name: string;
  last_name: string;
  is_admin: boolean;
}

const App: FC = (): JSX.Element => {
  // const [count, setCount] = useState<number>(0);

  const [formulario, setFormulario] = useState<Formulario>({
    name: "",
    last_name: "",
    is_admin: false,
  });

  const [users, setUsers] = useState<User[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setFormulario({
      ...formulario,
      [name]: name === "is_admin" ? checked : value,
    });
  };

  const storeUser = () => {
    const newUser: User = { id: users.length + 1, ...formulario };
    setUsers([...users, newUser]);
    setFormulario({
      name: "",
      is_admin: false,
      last_name: "",
    });
  };

  // const handleAumento = () => setCount(count + 1);
  // const handleDisminuir = () => setCount(count - 1);

  return (
    <div className="App">
      <Header titulo="Hola desde Header" subtitulo="Clase de react" />
      {/* <h1>{count}</h1> */}
      {/* <button onClick={handleAumento}>Aumentar</button>{" "} */}
      {/* <button onClick={handleDisminuir}>Diminuir</button> */}
      <div>
        <div>
          <input
            type="text"
            name="name"
            value={formulario.name}
            onChange={handleInputChange}
            placeholder="Ingrese su nombre"
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            value={formulario.last_name}
            onChange={handleInputChange}
            placeholder="Ingrese su apellido"
          />
        </div>
        <div>
          <input
            name="is_admin"
            checked={formulario.is_admin}
            onChange={handleInputChange}
            type="checkbox"
          />{" "}
          Es admin?
        </div>
        <div>
          <button onClick={storeUser}>Guardar</button>
        </div>
        <div>
          <h2>Lista de usuarios</h2>
          <ul>
            {users.map((user: User) => (
              <li>
                {user.name} - {user.last_name} -{" "}
                {user.is_admin ? "Es admin" : "No es admin"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
