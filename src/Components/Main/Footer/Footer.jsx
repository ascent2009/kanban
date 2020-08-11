import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const authorName = "Dmitry D.";
    const YEAR = new Date().getFullYear();

    return (
      <div className="footerStyle">
        <div className="footerTasksStatus">
          <p>Active tasks: {this.props.activeTasks}</p>
          <p>Finished tasks: {this.props.finishedTasks}</p>
        </div>
        <div className="copyright">
          Kanban board by {authorName}, {YEAR}
        </div>
      </div>
    );
  }
}

export default Footer;
