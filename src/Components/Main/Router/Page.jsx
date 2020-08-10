import React from "react";
import "./Page.css";
import close from "../../Img/close.svg";
import add from "../../Img/add.svg";

const dataBase = JSON.parse(localStorage.getItem("kanban")) || ["0"];

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: this.props.readyTasks,

      description: null,
    };
  }

  showDescription = () => {
    const taskDate = new Date().toLocaleString();
    const description = (
      <div className="description">
        <p className="date">{taskDate}</p>
        <textarea
          className="text"
          type="text"
          placeholder="description..."
        ></textarea>
        <button className="btn" onClick={this.saveDescription.bind(this)}>
          <img src={add} alt="add" title="добавить описание задачи и закрыть" />
        </button>
      </div>
    );

    this.setState({
      description: description,
    });
  };

  saveDB = () => localStorage.setItem("kanban", JSON.stringify(dataBase));

  saveDescription = () => {
    const save = document.querySelector(".text");
    save.setAttribute("disabled", "disabled");
    console.log("save", save);
    const itemObj = this.state.description;
    console.log("this.state.description: ", itemObj);
    const newArr = dataBase.push(itemObj.textarea);
    this.saveDB(newArr);

    setTimeout(this.hideDescription.bind(this), 2000);
  };

  hideDescription = () => {
    this.setState({ description: null });
  };

  closePage = () => {
    window.history.back();
  };

  render() {
    return (
      <>
        <div className="mainStyle">
          <div className="titleStyle">
            <h2>{this.props.title}</h2>

            <button
              className="closeButton"
              onClick={this.closePage.bind(this)}
              title="Закрыть окно"
            >
              <img src={close} alt="close" />
            </button>
          </div>

          <ul className="taskList">
            {this.state.taskList.map((item, index) => {
              return (
                <li
                  className="list"
                  onClick={this.showDescription.bind(this)}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          {this.state.description}
        </div>
      </>
    );
  }
}

export default Page;
