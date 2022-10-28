import { useState } from "react";
import Userinformation from "./components/UserInformation";
import SearchContainer from "./components/SearchContainer";
import Swal from "sweetalert2";
import "./App.css";
import sun from "./assets/icons/sun.png";

function App() {
  const [inputText, setInputText] = useState("");

  const [user, setUser] = useState(null);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        Swal.fire("Error", "El usuario que buscas no existe", "error");
        return;
      }

      setUser(data);
      setInputText("");
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div className="container">
      <div className="section-1">
        <h4 className="title">devfinder</h4>
        <button className="btn-mode">
          LIGHT <img width="20" src={sun} alt="" />
        </button>
      </div>
      <SearchContainer
        inputText={inputText}
        handleInputChange={handleInputChange}
        searchUser={searchUser}
      />
      {/* aca podemos hacer una validacion donde digamos que el div que sigue exista siempre y cuando user tengo datos */}
      {user && <Userinformation user={user} />}
    </div>
  );
}

export default App;
