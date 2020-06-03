import React from "react";
import "./Backlog.css";

class Backlog extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  state = {
    value: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddClick = () => {
    this.props.onAdd();
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState(({ value }) => {
      this.props.onAddItem(value);
      //   return {
      //     value: "",
      //   };
    });
  };

  render() {
    const { onAddItem } = this.props;
    return (
      <div className="backlogStyle">
        <h2 className="backlogTitle">Backlog</h2>
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <div className="backlogBtn">
          <button className="addBtn">
            <span className="plus">+</span>
            <p className="text">Add card</p>
          </button>
          {/* <div
            onAdd={(id) => {
              onAddItem(id);
            }}
          ></div> */}
          <button className="submitBtn" onClick={this.handleSubmitForm}>
            <p className="text">Submit</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Backlog;
