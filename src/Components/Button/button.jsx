import React from "react";
import "./button.css";

const Button = ({ onClick, onUpdate }) => {
  return (
    <button className="button + add" onClick={onClick}>
      <span className="plus">+</span>
      <p className="text">Add card</p>
    </button>
  );
};

export default Button;
