import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Backlog.css";
import Button from "../../Button/button";
// import Input from "../../Input/input";
// import Ready from "../Ready/Ready";
import Ready from "../Ready/Ready";
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
        <Button
          classNamе="button + add"
          onClick={this.createInput.bind(this)}
        />
      ),
      input: null,
      inputValue: null,
      tasks: [],
      // taskList: [],
      listInit: false,
      buttonInit: false,

      readyTasks: [],
      // taskColumn: [],
      title: "Backlog",
      // activeTasks: this.readyTasks.length,
      submitBtn: null,
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
        // autoComplete="off"
        // autoFocus={true}
        className="tasks"
        onChange={this.addValue.bind(this)}
        // onClick={this.addTask.bind(this)}
      ></input>
    );

    const submitBtn = (
      <button onClick={this.addTask.bind(this)} className="button">
        <p className="text">Submit</p>
      </button>
    );
    this.setState({
      buttonInit: true,
      // button: <Button onClick={this.addTask.bind(this)} />,

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
      // return <Input className="taskEmpty" />;
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

  // activeTasksFooter = () => {
  //   this.setState({
  //     activeTasks: this.tasks.readyTasks.length,
  //   });
  // };

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

    const routePage = () => (
      <Page
        title={this.state.title}
        readyTasks={this.state.tasks}
        // active={this.state.readyTasks}
        // active={this.state.activeTasks}
      />
    );

    return (
      <div className="tasksBoard">
        <Router>
          <Route path="/backlog" component={routePage} />
          <div className="backlogStyle">
            <h2
              className="backlogTitle"
              // onClick={() => {
              //   this.props.active(this.state.tasks.length);
              // }}
            >
              <Link to="/backlog" className="routerLink">
                {this.state.title}
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

            <div className="backlogBtn">
              {this.state.button}
              {/* <div
                onClick={() => {
                  this.props.active(this.state.tasks.length + 1);
                }}
              > */}
              {this.state.submitBtn}
              {/* </div> */}
            </div>
          </div>

          <Ready
            tasks={taskList}
            buttonInit={this.state.buttonInit}
            // listInit={this.state.listInit}
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
