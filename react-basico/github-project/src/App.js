import { useState } from "react";
import Userinformation from "./components/UserInformation";
import "./App.css";
import search from "./assets/icons/search.png";
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
      setUser(data);
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
      <div className="search-container">
        <div className="input-container">
          <img width="15" src={search} alt="" />
          <input
            value={inputText}
            onChange={handleInputChange}
            className="input-search"
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button className="btn-search" onClick={searchUser}>
            Search
          </button>
        </div>
      </div>
      {/* aca podemos hacer una validacion donde digamos que el div que sigue exista siempre y cuando user tengo datos */}
      {user && <Userinformation user={user} />}
    </div>
  );
}

export default App;
