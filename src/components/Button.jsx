import React from "react";
import "../styles/button.css";

const Button = ({ button, name, icon }) => {
  return (
    <>
      <button className={button}>
        {icon ? <img src={icon} alt="" /> : null} {name}
      </button>
    </>
  );
};

export default Button;
