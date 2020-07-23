import React from "react";
import Backlog from "./Backlog/Backlog";
import Footer from "./Footer/Footer";
// import Ready from "./Ready/Ready";
// import InProgress from "./InProgress/Inprogress";
// import Finished from "./Finished/Finished";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Page from "./Router/Page";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: 0,
      finishedTasks: 0,
    };
  }

  // handleTaskItem = (value, id) => {
  //   this.setState(({ taskArr }) => {
  //     taskArr.unshift({
  //       value,
  //       id: taskArr.length + 1,
  //     });
  //     console.log("tasks:", taskArr);
  //     return {
  //       taskArr,
  //     };
  //   });
  // };

  // updateData = (value) => {
  //   this.setState({ taskList: value });
  // };

  activeCounter = (value) => {
    this.setState({ tasks: value });
    // console.log("активные задачи Main: ", value);
  };

  finishedCounter = (value) => {
    this.setState({ finishedTasks: value });
    console.log("активные задачи Main: ", value);
  };

  render() {
    // const { taskArr } = this.state;
    // const taskList = () => {
    //   console.log("taskList: ", this.taskList);
    // };
    return (
      <>
        {/* <div className="tasksBoard"> */}
        <div>
          {/* <p>State: {this.state.taskList}</p> */}
          <Backlog
            active={this.activeCounter}
            finished={this.finishedCounter}
          />
        </div>

        {/* <Ready
          // tasks={this.state.taskList}
          // buttonInit={this.state.buttonInit}
          // listInit={this.state.inputValue}
          // readyTasks={this.state.readyTasks}
          />
          <InProgress
          // listInit={this.state.listInit}
          // readyTasks={this.props.ready}
          />
          <Finished
          // listInit={this.state.listInit}
          // readyTasks={this.props.ready}
          /> */}
        {/* </div> */}
        <Footer
          activeTasks={this.state.tasks}
          finishedTasks={this.state.finishedTasks}
        />
      </>
    );
  }
}

export default Main;
