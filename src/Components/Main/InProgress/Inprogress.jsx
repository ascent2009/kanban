import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Inprogress.css";
import Finished from "../Finished/Finished";
import Button from "../../Button/button";
import Page from "../Router/Page";

class Inprogress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: <Button onClick={this.createSelect.bind(this)} />,
      selectBox: null,
      listInit: false,
      backlogTasks: [],
      readyTasks: [],
      taskArr: [],
      dropDownInit: false,
      title: "In Progress",
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
        this.props.readyTasks,
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
        <div className="tasks" key={index}>
          {item}
        </div>
      );
    });

    const routePage = () => (
      <Page title={this.state.title} readyTasks={this.state.readyTasks} />
    );

    return (
      <Router>
        <Route path="/progress" component={routePage} />
        <div className="style">
          <Link to="/progress" className="routerLink">
            <h2 className="readyTitle">{this.state.title}</h2>
          </Link>
          {this.state.selectBox}
          {ready}
          <div>
            <ul className="listItem">{dropDown}</ul>
          </div>
          <div className="backlogBtn">{this.state.button}</div>
        </div>

        <Finished
          listInit={this.state.listInit}
          readyTasks={ready}
          deleteTask={this.deleteTask}
          finished={this.props.finished}
        />
      </Router>
    );
  }
}

export default Inprogress;
