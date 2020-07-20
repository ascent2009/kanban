import React from "react";
import "./button.css";

const Button = ({ onClick, onUpdate }) => {
  return (
    // <button className="button" onClick={onClick}>
    //   + Add task
    // </button>
    // <div className="backlogBtn">
    <button className="button + add" onClick={onClick}>
      <span className="plus">+</span>
      <p className="text">Add card</p>
    </button>
    /* <button className="submitBtn" onClick={onUpdate}>
        <p className="text">Submit</p>
      </button> */
    // </div>
  );
};

export default Button;
