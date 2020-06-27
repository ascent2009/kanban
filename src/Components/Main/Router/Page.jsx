import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Page.css";
import close from "../../Img/close.svg";
import add from "../../Img/add.svg";
import Main from "../Main";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: 0,
      title: "Backlog",
      // taskList: 0,
      // name: "Бумеранг не запущен",
      showInfo: false,
    };
  }

  showDescription = () => {
    const desription = (
      <div className="description">
        <textarea
          className="text"
          type="text"
          placeholder="description..."
        ></textarea>
        <button className="btn" onClick={this.hideDescription.bind(this)}>
          <img src={add} alt="add" title="добавить описание задачи" />
        </button>
      </div>
    );

    this.setState({ taskList: desription });
  };

  hideDescription = () => {
    this.setState({ taskList: this.props.taskList });
    console.log("task");
  };

  closePage = () => {
    window.history.back();
  };

  render() {
    return (
      <>
        <div className="mainStyle">
          <div className="titleStyle">
            <h2>{this.state.title}</h2>
            <button className="closeButton" onClick={this.closePage.bind(this)}>
              <img src={close} alt="close" />
            </button>
          </div>
          <div className="taskList" onClick={this.showDescription.bind(this)}>
            {this.state.taskList}
          </div>
          {/* <textarea
            className="description"
            type="text"
            placeholder="description..."
          /> */}
        </div>
      </>
    );
  }
}

export default Page;
