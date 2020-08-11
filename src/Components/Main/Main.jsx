import React from "react";
import Backlog from "./Backlog/Backlog";
import Footer from "./Footer/Footer";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: 0,
      finishedTasks: 0,
    };
  }

  activeCounter = (value) => {
    this.setState({
      tasks: value,
    });
  };

  minusActiveCounter = (value) => {
    this.setState({
      tasks: value,
    });
  };

  finishedCounter = (value) => {
    this.setState({
      finishedTasks: value,
    });
  };

  render() {
    return (
      <>
        <div>
          <Backlog
            active={this.activeCounter}
            minusActive={this.minusActiveCounter}
            finished={this.finishedCounter}
          />
        </div>
        <Footer
          activeTasks={this.state.tasks}
          finishedTasks={this.state.finishedTasks}
        />
      </>
    );
  }
}

export default Main;
