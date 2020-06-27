import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Backlog.css";
import Button from "../../Button/button";
// import Input from "../../Input/input";
// import Ready from "../Ready/Ready";
import Ready from "./Ready/Ready";
import Page from "../Router/Page";

class Backlog extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: "",
    //   tasks: [],
    // };
    this.state = {
      button: (
        <Button classNamе="addBtn" onClick={this.createInput.bind(this)} />
      ),
      input: null,
      inputValue: null,
      tasks: [],
      // taskList: [],
      listInit: false,
      buttonInit: false,
      // name: "Бумеранг вернулся назад",
      readyTasks: [],
      // taskColumn: [],
    };
  }

  // createTask = () => {
  //   this.state.tasks.unshift(<Input />);
  //   this.setState({
  //     tasks: this.state.tasks,
  //   });
  // };

  addReadyTask(event) {
    const task = event.target.textContent;
    // const task = event.target;
    this.setState({
      readyTasks: [...this.state.readyTasks, task],
    });
  }

  createInput() {
    const input = (
      <input
        className="tasks"
        onChange={this.addValue.bind(this)}
        onClick={this.addTask.bind(this)}
      ></input>
    );
    this.setState({
      buttonInit: true,
      button: <Button onClick={this.addTask.bind(this)} />,
      input: input,
      listInit: false,
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
      // return <Input className="taskEmpty" />;
    }

    this.setState({
      input: null,
      tasks: [...this.state.tasks, this.state.inputValue],
      inputValue: null,
      button: <Button onClick={this.createInput.bind(this)} />,
      listInit: true,
    });
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
        >
          {item}
        </li>
      );
    });
    // console.log("taskList: ", taskList.length);
    // const readyTasks = this.state.readyTasks.map((item, index) => {
    //   return <div key={index}>{item}</div>;
    // });

    return (
      <>
        <Router>
          <Route path="/backlog" component={Page} />
          <div className="backlogStyle">
            <h2 className="backlogTitle">
              <Link to="/backlog" className="routerLink">
                Backlog
              </Link>
            </h2>
            {/* <Button
            className="submitBtn"
            onUpdate={() => this.props.updateData(taskList.length)}
          /> */}

            <div>
              {/* {this.state.tasks} */}
              <ul className="listItem">{taskList}</ul>
            </div>
            {/* <Button className="backlogBtn" onClick={this.createTask.bind(this)} /> */}
            {this.state.input}
            {this.state.button}
          </div>
          <div>
            <Ready
              tasks={taskList}
              buttonInit={this.state.buttonInit}
              // listInit={this.state.listInit}
              listInit={this.state.inputValue}
              readyTasks={this.state.readyTasks}
              deleteTask={this.deleteTask}
            />
          </div>
        </Router>
      </>
    );
  }
}

export default Backlog;
