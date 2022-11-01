import { useState } from "react";
import HeaderSection from "./components/HeaderSection";
import Userinformation from "./components/UserInformation";
import SearchContainer from "./components/SearchContainer";
import Swal from "sweetalert2";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");

  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

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
      <HeaderSection />
      <SearchContainer
        inputText={inputText}
        handleInputChange={handleInputChange}
        searchUser={searchUser}
      />
      {/* aca podemos hacer una validacion donde digamos que el div que sigue exista siempre y cuando user tengo datos */}
      {user && <Userinformation user={user} />}
    </div>
  );
};

export default App;
