import React from "react";
import "./Loginpage.css";

class Loginpage extends React.Component {
  closePage = () => {
    window.history.back();
  };

  render() {
    return (
      <>
        <div className="mainStyle">
          <label for="login">Username</label>
          <input type="text" id="login" placeholder="enter username..."></input>

          <label for="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="enter password..."
          ></input>

          <button type="submit">Sign in</button>
        </div>
      </>
    );
  }
}

export default Loginpage;
