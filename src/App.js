import React from "react";
import logo from "./logo.svg";
import "./App.css";

const app = () => {
  const APP_ID = "6685086c";
  const APP_Key = "5d90100d6311cc787e1aae63a19b80b5";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
