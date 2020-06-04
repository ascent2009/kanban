import React from "react";
import "./button.css";

const Button = ({ onClick }) => {
  return (
    // <button className="button" onClick={onClick}>
    //   + Add task
    // </button>
    <div className="backlogBtn">
      <button className="addBtn" onClick={onClick}>
        <span className="plus">+</span>
        <p className="text">Add card</p>
      </button>
      <button className="submitBtn">
        <p className="text">Submit</p>
      </button>
    </div>
  );
};

export default Button;
