import React from "react";
import "./Backlog.css";
import Button from "../../Button/button";
import Input from "../../Input/input";

class Backlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tasks: [],
    };
  }

  createTask = () => {
    this.state.tasks.unshift(<Input />);
    this.setState({
      tasks: this.state.tasks,
    });
  };

  render() {
    const taskList = this.state.tasks.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <>
        <div className="backlogStyle">
          <h2 className="backlogTitle">Backlog</h2>
          <div>
            {/* {this.state.tasks} */}
            <ul className="listItem">{taskList}</ul>
          </div>
          <Button className="backlogBtn" onClick={this.createTask.bind(this)} />
        </div>
      </>
    );
  }
}

export default Backlog;
