import React from "react";
import Button from "../components/Button";
import Logo from "../assets/img/Logo-productly.png";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <ul class="menu-list">
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Customers</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>
      <div className="buttons">
        <Button button="secondaryButton" name="Sign In" />
        <Button button="primaryButton" name="Sign Up" />
      </div>
    </nav>
  );
};

export default Navigation;
