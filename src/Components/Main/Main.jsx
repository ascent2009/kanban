import React from "react";
import Backlog from "./Backlog/Backlog";
// import Ready from "./Ready/Ready";
// import Footer from "./Footer/Footer";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      readyTasks: [],
    };
  }

  addReadyTask(event) {
    const task = event.target.textContent;
    this.setState({
      readyTasks: [...this.state.readyTasks, task],
    });
  }

  // activeCounter = (value) => {
  //   this.setState({
  //     tasks: value,
  //   });
  // };

  // minusActiveCounter = (value) => {
  //   this.setState({
  //     tasks: value,
  //   });
  // };

  // finishedCounter = (value) => {
  //   this.setState({
  //     finishedTasks: value,
  //   });

  render() {
    // console.log("readyTasks: ", this.state.tasks);
    return (
      <div>
        <Backlog
          active={this.props.active}
          minusActive={this.props.minusActive}
          finished={this.props.finished}
          // tasks={this.state.tasks}
          // readyTasks={this.state.readyTasks}
          addReadyTask={this.addReadyTask}
        />
      </div>
    );
  }
}

export default Main;
