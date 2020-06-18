import React from "react";
import "./Finished.css";
import Button from "../../Button/button";
import Select from "../../Select/select";

class Finished extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tasks: [],
    };
  }

  createTask = () => {
    this.state.tasks.unshift(<Select />);
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
        <div className="style">
          <h2 className="title">Finished</h2>
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

export default Finished;
