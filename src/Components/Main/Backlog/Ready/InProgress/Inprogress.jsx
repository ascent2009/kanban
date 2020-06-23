import React from "react";
import "./Inprogress.css";
import Finished from "./Finished/Finished";
import Button from "../../../../Button/button";

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
        this.props.readyTasks,
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
      listInit: true,
    });
    this.props.deleteTask(index);
  }

  deleteTask = (value) => {
    const newArr = this.state.readyTasks.splice(value, 1);

    this.setState({
      taskArr: [...this.state.readyTasks, newArr],
    });
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
        <div>
          <Finished
            listInit={this.state.listInit}
            readyTasks={ready}
            deleteTask={this.deleteTask}
          />
        </div>
      </>
    );
  }
}

export default Inprogress;
