import React from "react";
import "../styles/button.css";

const Button = ({ button, name }) => {
  return (
    <>
      <button className={button}>{name}</button>
    </>
  );
};

export default Button;
