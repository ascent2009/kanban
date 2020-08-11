import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Awesome Kanban Board</h1>
        <Header />
      </header>

      <Main />
    </div>
  );
}

export default App;
