import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import userMenuUp from "../Img/userMenuUp.jpg";
import userMenuDown from "../Img/userMenuDown.jpg";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMenu: <img src={userMenuDown} alt="userMenu"></img>,
      click: false,
      dropDownMenu: null,
    };
  }

  userMenu() {
    const dropDownMenu = (
      <div className="dropDownContayner">
        <div className="dropDownArrow"></div>
        <ul className="dropDownMenu">
          <Router>
            <li>
              <p className="menuItem">My account</p>
            </li>
            <li>
              <p className="menuItem">
                <Link to="/">My tasks</Link>
              </p>
            </li>
            <li>
              <p className="menuItem">Log out</p>
            </li>
          </Router>
        </ul>
      </div>
    );

    if (this.state.click === false) {
      this.setState({
        userMenu: <img src={userMenuUp} alt="userMenu"></img>,
        dropDownMenu: dropDownMenu,
        click: !this.state.click,
      });
    } else {
      this.setState({
        userMenu: <img src={userMenuDown} alt="userMenu"></img>,
        dropDownMenu: null,
        click: !this.state.click,
      });
    }
  }

  render() {
    return (
      <div className="headerStyle">
        <div className="header">
          <div className="userMenu">
            <div onClick={this.userMenu.bind(this)}>{this.state.userMenu}</div>
            {this.state.dropDownMenu}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
