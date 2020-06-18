import React from "react";
import "./Footer.css";
import Backlog from "../Main/Backlog/Backlog";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTasks: 0,
    };
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
          <p>Finished tasks: 'M'</p>
        </div>
        <div className="copyright">
          Kanban board by {authorName}, {YEAR}
        </div>
      </div>
    );
  }
}

export default Footer;
