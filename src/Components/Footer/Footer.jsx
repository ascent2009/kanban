import React from "react";
import "./Footer.css";
import Backlog from "../Main/Backlog/Backlog";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTasks: 0,
      finishedTasks: 0,
      taskList: <Backlog />,
    };
  }

  test() {
    console.log(this.props.taskList);
  }

  activeTasksNumber = () => {
    this.setState({
      activeTasks: this.state.taskList,
    });
  };

  render() {
    const authorName = "Dmitry D.";
    const YEAR = new Date().getFullYear();

    return (
      <div className="footerStyle">
        <div className="footerTasksStatus">
          {/* <p>Active tasks: {this.activeTasksNumber}</p> */}
          <p>Active tasks: {this.state.activeTasks}</p>
          <p onClick={this.test.bind(this)}>
            Finished tasks: {this.state.finishedTasks}
          </p>
        </div>
        <div className="copyright">
          Kanban board by {authorName}, {YEAR}
        </div>
        {/* <button onClick={this.test.bind(this)}>test</button> */}
      </div>
    );
  }
}

export default Footer;
