import React from "react";
import "./Inprogress.css";
import Finished from "../Finished/Finished";
import Button from "../../Button/button";

// import Select from "../../Select/select";

class Inprogress extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: "",
    //   tasks: [],
    // };

    // this.data = this.props.tasks;

    this.state = {
      button: <Button onClick={this.createSelect.bind(this)} />,
      selectBox: null,
      // buttonInit: false,
      listInit: false,
      backlogTasks: [],
      // tasks: [],
      // dropDownInit: this.props.listInit,
      readyTasks: [],
    };
  }

  // createTask = () => {
  //   this.state.tasks.unshift(<Select />);
  //   this.setState({
  //     tasks: this.state.tasks,
  //   });
  // };

  createSelect() {
    if (this.props.listInit === false) {
      return;
    }

    const selectBox = (
      <div className="tasks" onClick={this.addTask.bind(this)}></div>
    );

    this.setState({
      selectBox: selectBox,
    });
  }

  addTask() {
    if (this.state.dropDownInit === true) {
      return;
    }

    this.setState({
      dropDownInit: true,
      backlogTasks: [...this.state.backlogTasks, this.props.readyTasks],
    });
  }

  selectTask(event) {
    const task = event.target.textContent;

    this.setState({
      readyTasks: [...this.state.readyTasks, task],
      backloпTasks: [],
      selectBox: null,
      dropDownInit: false,
      listInit: true,
    });
  }

  render() {
    const dropDown = this.state.backlogTasks.map((item, index) => {
      return (
        <div onClick={this.selectTask.bind(this)} className="tasks" key={index}>
          {item}
        </div>
      );
      // const taskList = this.state.tasks.map((item, index) => {
      //   return <li key={index}>{item}</li>;
    });

    const ready = this.state.readyTasks.map((item, index) => {
      return (
        <div className="tasks" key={index}>
          {item}
        </div>
      );
    });

    return (
      // <>
      //   <div className="style">
      //     <h2 className="title">Ready</h2>
      //     <div>
      //       {/* {this.state.tasks} */}
      //       <ul className="listItem">{taskList}</ul>
      //     </div>
      //     <Button className="backlogBtn" onClick={this.createTask.bind(this)} />
      //   </div>
      // </>

      <>
        <div className="style">
          <h2 className="readyTitle">In Progress</h2>
          {this.state.selectBox}
          {/* {this.backlogTasks} */}
          {ready}
          {/* {this.props.readyTasks} */}
          <div>
            <ul className="listItem">{dropDown}</ul>
          </div>
          {this.state.button}
        </div>
        {/* <div>
          <Finished
            listInit={this.state.listInit}
            ready={this.state.readyTasks}
          />
        </div> */}
      </>
    );
  }
}

export default Inprogress;
