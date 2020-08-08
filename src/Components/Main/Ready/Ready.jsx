import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Ready.css";
import Inprogress from "../InProgress/Inprogress";
import Button from "../../Button/button";
import Page from "../Router/Page";

class Ready extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Ready",
      button: <Button onClick={this.createSelect.bind(this)} />,
      selectBox: null,
      listInit: false,
      backlogTasks: [],
      disabled: true,
      readyTasks: [],
      taskArr: [],
      dropDownInit: false,
    };
  }

  createSelect() {
    if (this.props.listInit === false) {
      return;
    }

    const selectBox = (
      <div className="tasks" onClick={this.addTask.bind(this)}></div>
    );

    this.setState({
      selectBox: selectBox,
      // thereAreTasks: true,
      // button: <Button onClick={this.createSelect.bind(this)} />,
    });
  }

  addTask() {
    if (this.state.dropDownInit === true) {
      return;
    }

    this.setState({
      dropDownInit: true,
      backlogTasks: React.Children.toArray([
        ...this.state.backlogTasks,
        this.props.tasks,
      ]),
    });
  }

  selectTask(event) {
    const task = event.target.textContent;
    const index = event.target.getAttribute("index");

    this.setState({
      readyTasks: [...this.state.readyTasks, task],
      backlogTasks: [],
      selectBox: null,
      dropDownInit: false,
      listInit: true,
    });

    this.props.deleteTask(index);

    this.props.minusActive(this.props.tasks.length - 1);
  }

  deleteTask = (value) => {
    const newArr = this.state.readyTasks.splice(value, 1);

    this.setState({
      taskArr: [...this.state.readyTasks, newArr],
    });
  };

  render() {
    const dropDown = this.state.backlogTasks.map((item, index) => {
      return (
        <div onClick={this.selectTask.bind(this)} className="tasks" key={index}>
          {item}
        </div>
      );
    });

    const ready = this.state.readyTasks.map((item, index) => {
      return (
        <li className="tasks" key={index} index={index}>
          {item}
        </li>
      );
    });

    const routePage = () => (
      <Page title={this.state.title} readyTasks={this.state.readyTasks} />
    );

    return (
      <Router>
        <Route path="/ready" component={routePage} />
        <div className="style">
          <h2 className="readyTitle">
            <Link to="/ready" className="routerLink">
              {this.state.title}
            </Link>
          </h2>
          {this.state.selectBox}
          {ready}

          <div>
            <ul className="listItem">{dropDown}</ul>
          </div>

          <div className="backlogBtn">{this.state.button}</div>
        </div>

        <Inprogress
          listInit={this.state.listInit}
          readyTasks={ready}
          deleteTask={this.deleteTask}
          finished={this.props.finished}
        />
      </Router>
    );
  }
}

export default Ready;
