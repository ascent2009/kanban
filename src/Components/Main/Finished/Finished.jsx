import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Finished.css";
import Button from "../../Button/button";
import Page from "../Router/Page";

class Finished extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: (
        <Button
          classNamе="button + add"
          onClick={this.createSelect.bind(this)}
        />
      ),
      clearBtn: null,

      selectBox: null,
      listInit: false,
      backlogTasks: [],
      readyTasks: [],
      title: "Finished",
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
      backlogTasks: [...this.state.backlogTasks, this.props.readyTasks],
    });
  }

  selectTask(event) {
    const task = event.target.textContent;
    const index = event.target.getAttribute("index");

    const clearBtn = (
      <button onClick={this.clearFinished.bind(this)} className="button + clr">
        <p className="text">Clear All</p>
      </button>
    );

    this.setState({
      readyTasks: [...this.state.readyTasks, task],
      backlogTasks: [],
      selectBox: null,
      dropDownInit: false,
      listInit: true,
      clearBtn: clearBtn,
    });
    this.props.deleteTask(index);
    this.props.finished(this.state.readyTasks.length + 1);
  }

  deleteTask = (value) => {
    const newArr = this.state.readyTasks.splice(value, 1);

    this.setState({
      taskArr: [...this.state.readyTasks, newArr],
    });
  };

  clearFinished = () => {
    this.setState({
      readyTasks: [],
      clearBtn: null,
    });
    this.props.finished(0);
  };

  render() {
    const dropDown = this.state.backlogTasks.map((item, index) => {
      return (
        <div
          onClick={this.selectTask.bind(this)}
          className="tasksSelect"
          key={index}
        >
          {item}
        </div>
      );
    });

    const ready = this.state.readyTasks.map((item, index) => {
      return (
        <div className="tasks" key={index} index={index}>
          {item}
        </div>
      );
    });

    const routePage = () => (
      <Page title={this.state.title} readyTasks={this.state.readyTasks} />
    );

    return (
      <Router>
        <Route path="/finished" component={routePage} />
        <div className="style">
          <Link to="/finished" className="routerLink">
            <h2 className="readyTitle"> {this.state.title}</h2>
          </Link>
          {this.state.selectBox}

          {ready}

          <div>
            <ul className="listItem"> {dropDown}</ul>
          </div>
          <div className="backlogBtn">
            {this.state.button}
            {this.state.clearBtn}
          </div>
        </div>
      </Router>
    );
  }
}

export default Finished;
