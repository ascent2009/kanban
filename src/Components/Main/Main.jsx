import React from "react";
import Backlog from "./Backlog/Backlog";
import "./Main.css";

class Main extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  // state = {
  //   taskArr: [],
  // };

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

  render() {
    // const { taskArr } = this.state;
    return (
      <div className="tasksBoard">
        <Backlog
        // item={taskArr} onAddItem={this.handleTaskItem}
        />
      </div>
    );
  }
}

export default Main;
