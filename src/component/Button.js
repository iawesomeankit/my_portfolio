import React from "react";
import "./button.css";
function Button({ text }) {
  return (
    <a
      href="https://drive.google.com/file/d/1JTXYviV0XwyPysL7oU5thmsfPQlGyIgp/view?usp=sharing"
      target="_blank"
    >
      <button className="btn">{text}</button>
    </a>
  );
}

export default Button;
