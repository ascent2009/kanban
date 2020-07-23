import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Page.css";
import close from "../../Img/close.svg";
import add from "../../Img/add.svg";

const dataBase = JSON.parse(localStorage.getItem("kanban")) || ["0"];

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: this.props.readyTasks,

      // taskList: 0,
      // name: "Бумеранг не запущен",
      description: null,
    };
  }

  showDescription = () => {
    const taskDate = new Date().toLocaleString();

    // const edit = document.querySelector(".description");
    // edit.classList.remove("hide");
    // const description = (
    //   <div className="description">
    //     <textarea
    //       className="text"
    //       type="text"
    //       placeholder="description..."
    //     ></textarea>
    //     <button
    //       className="btn"
    //       onClick={this.saveDescription.bind(this)}
    //       // onDoubleClick={this.hideDescription.bind(this)}
    //     >
    //       <img src={add} alt="add" title="добавить описание задачи" />
    //     </button>
    //   </div>
    // );
    this.setState({
      description: (
        <div className="description">
          {taskDate}
          <textarea
            className="text"
            type="text"
            placeholder="description..."
          ></textarea>
          <button
            className="btn"
            onClick={this.saveDescription.bind(this)}
            // onDoubleClick={this.hideDescription.bind(this)}
          >
            <img src={add} alt="add" title="добавить описание задачи" />
          </button>
        </div>
      ),
    });
  };

  saveDB = () => localStorage.setItem("kanban", JSON.stringify(dataBase));

  saveDescription = () => {
    const save = document.querySelector(".text");
    save.setAttribute("disabled", "disabled");
    console.log("save", save);
    // save.classList.add("hide");
    // this.setState({ taskList: this.taskList });

    // dataBase.push(this.taskDate);
    const itemObj = this.state.description;
    console.log("this.state.description: ", itemObj);
    const newArr = dataBase.push(itemObj.textarea);
    this.saveDB(newArr);

    setTimeout(this.hideDescription.bind(this), 3000);
  };

  hideDescription = () => {
    this.setState({ description: null });
    // const save = document.querySelector(".description");
    // save.setAttribute("disabled", "disabled");
    // save.classList.add("hide");
  };

  closePage = () => {
    window.history.back();
  };

  render() {
    return (
      <>
        {/* <Router> */}
        <div className="mainStyle">
          <div className="titleStyle">
            <h2>{this.props.title}</h2>

            <button
              className="closeButton"
              onClick={this.closePage.bind(this)}
              title="Закрыть окно"
            >
              {/* <Link to="/"> */}
              <img src={close} alt="close" />
              {/* </Link> */}
            </button>
          </div>

          <ul className="taskList">
            {this.props.readyTasks.map((item, index) => {
              return (
                <li
                  className="listItem"
                  onClick={this.showDescription.bind(this)}
                  key={index}
                >
                  {/* {this.state.taskList}
                    {this.state.description} */}
                  {item}
                  {this.state.description}
                </li>
              );
            })}
          </ul>

          {/* <textarea
            className="description"
            type="text"
            placeholder="description..."
          /> */}
        </div>
        {/* </Router> */}
      </>
    );
  }
}

export default Page;
