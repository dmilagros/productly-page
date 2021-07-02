import React from "react";
import Button from "./Button";

const Feature = () => {
  const features = [
    {
      color: "#7752BE",
      title: "First click tests",
      description: "While most people enjoy casino gambling",
    },
    {
      color: "#FAB005",
      title: "Design surveys",
      description: "Sports betting, lottery and bingo playing for the fun",
    },
    {
      color: "#F03E3D",
      title: "Preference tests",
      description: "The Myspace page defines the individual.",
    },
    {
      color: "#4DADF7",
      title: "Five second tests",
      description:
        "Personal choices and the overall personality of the person.",
    },
  ];
  return (
    <div className="feature-container">
      <div className="feature-title">
        <h2 className="title">We design tools to unveil your superpowers</h2>
      </div>
      <div className="feature-background">
        {features.map((feature) => (
          <div className="card-feature" key={feature.title}>
            <div
              style={{
                width: "50px",
                height: "50px",
                background: `linear-gradient(360deg, ${feature.color}60 0%, ${feature.color}00 72.31%)`,
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: `${feature.color}`,
                  borderRadius: "19px",
                }}
              ></div>
            </div>
            <h2 className="feature-card-title">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="feature-button">
        <Button button="primaryButton" name="SIGN UP NOW" />
      </div>
    </div>
  );
};

export default Feature;
