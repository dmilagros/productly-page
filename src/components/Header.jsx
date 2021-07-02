import React from "react";
import Button from "../components/Button";
import imgHeader from "../assets/img/img-header.png";
import iconTriangle from "../assets/icon/icon_triangle.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text">
        <h2>The Design Thinking superpowers</h2>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="header-buttons">
          <Button button="primaryButton" name="Get started" />
          <Button
            button="linkButton"
            name="Watch the Video"
            icon={iconTriangle}
          />
        </div>
      </div>
      <div className="header-img">
        <img src={imgHeader} alt="" width="605" height="496" />
      </div>
    </div>
  );
};

export default Header;
