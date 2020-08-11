import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Backlog.css";
import Button from "../../Button/button";
import Ready from "../Ready/Ready";
import Page from "../Router/Page";

class Backlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: (
        <Button
          classNamе="button + add"
          onClick={this.createInput.bind(this)}
        />
      ),
      input: null,
      inputValue: null,
      tasks: [],
      listInit: false,
      readyTasks: [],
      title: "Backlog",
      submitBtn: null,
    };
  }

  addReadyTask(event) {
    const task = event.target.textContent;
    this.setState({
      readyTasks: [...this.state.readyTasks, task],
    });
  }

  createInput() {
    const input = (
      <input className="tasks" onChange={this.addValue.bind(this)}></input>
    );

    const submitBtn = (
      <button onClick={this.addTask.bind(this)} className="button">
        <p className="text">Submit</p>
      </button>
    );
    this.setState({
      buttonInit: true,

      input: input,
      listInit: false,
      button: null,
      submitBtn: submitBtn,
    });
  }

  addValue(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  addTask() {
    if (this.state.inputValue === null) {
      return;
    }

    this.setState({
      input: null,
      tasks: [...this.state.tasks, this.state.inputValue],
      inputValue: null,
      button: <Button onClick={this.createInput.bind(this)} />,
      listInit: true,
      submitBtn: null,
    });

    this.props.active(this.state.tasks.length + 1);
  }

  deleteTask = (value) => {
    this.state.tasks.splice(value, 1);
  };

  render() {
    const taskList = this.state.tasks.map((item, index) => {
      return (
        <li
          onClick={this.addReadyTask.bind(this)}
          className="tasks"
          key={index}
          index={index}
        >
          {item}
        </li>
      );
    });

    const routePage = () => (
      <Page title={this.state.title} readyTasks={this.state.tasks} />
    );

    return (
      <div className="tasksBoard">
        <Router>
          <Route path="/backlog" component={routePage} />
          <div className="backlogStyle">
            <h2 className="backlogTitle">
              <Link to="/backlog" className="routerLink">
                {this.state.title}
              </Link>
            </h2>

            <div>
              <ul className="listItem">{taskList}</ul>
            </div>

            {this.state.input}

            <div className="backlogBtn">
              {this.state.button}
              {this.state.submitBtn}
            </div>
          </div>

          <Ready
            tasks={taskList}
            listInit={this.state.inputValue}
            readyTasks={this.state.readyTasks}
            deleteTask={this.deleteTask}
            finished={this.props.finished}
            minusActive={this.props.minusActive}
          />
        </Router>
      </div>
    );
  }
}

export default Backlog;
