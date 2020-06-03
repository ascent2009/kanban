import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Awesome Kanban Board</h1>
        {/* <div className="image">
          <img className="image-user" src={user}></img> 
          <img className="image-arrow" src={arrdown}></img>
        </div> */}
        <Header />
      </header>
      <Main />
      {/* <div>
        <select name="order-list" id="order-list">
          <option value="0-5">до 5 баррелей в неделю</option>
          <option selected value="5-10">От 5 до 10 баррелей в неделю</option>
          <option value="10-">От 10 баррелей в неделю</option>
        </select>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;