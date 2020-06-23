import React from "react";
import "./Ready.css";
// import Inprogress from "../../InProgress/Inprogress";
import Inprogress from "./InProgress/Inprogress";
import Button from "../../../Button/button";

// import Select from "../../Select/select";

class Ready extends React.Component {
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
      // listInit: false,
      backlogTasks: [],
      // tasks: [],

      readyTasks: [],
      taskArr: [],
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
      thereAreTasks: true,
      button: <Button onClick={this.createSelect.bind(this)} />,
    });
  }

  addTask() {
    if (this.state.dropDownInit === true) {
      return;
    }

    this.setState({
      dropDownInit: true,
      backlogTasks: React.Children.toArray([
        ...this.state.backlogTasks,
        this.props.tasks,
      ]),
    });
  }

  selectTask(event) {
    const task = event.target.textContent;
    const index = event.target.getAttribute("index");

    this.setState({
      readyTasks: [...this.state.readyTasks, task],
      backlogTasks: [],
      selectBox: null,
      dropDownInit: false,
      // listInit: true,
    });

    this.props.deleteTask(index);
    console.log("ready", this.state.readyTasks);
  }

  deleteTask = (value) => {
    const newArr = this.state.readyTasks.splice(value, 1);

    this.setState({
      taskArr: [...this.state.readyTasks, newArr],
    });

    console.log("delete", this.state.readyTasks);
  };

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
        <li className="tasks" key={index} index={index}>
          {item}
        </li>
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
          <h2 className="readyTitle">Ready</h2>
          {this.state.selectBox}
          {/* {this.backlogTasks} */}
          {ready}
          {/* {this.props.readyTasks} */}
          <div>
            <ul className="listItem">{dropDown}</ul>
          </div>
          {this.state.button}
        </div>
        <div>
          <Inprogress
            listInit={this.state.listInit}
            // readyTasks={this.state.readyTasks}
            readyTasks={ready}
            deleteTask={this.deleteTask}
          />
        </div>
      </>
    );
  }
}

export default Ready;
