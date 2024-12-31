import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-logo">
        <img
          src="https://img.freepik.com/premium-vector/vector-design-outdoor-gym-icon-style_822882-45528.jpg"
          alt="Logo Icon"
          className="logo-img"
        />{" "}
        {/* Use an <img> tag here */}
        <div className="logo">Healthy</div>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <div className="icon home"></div>
        </div>
        <div className="nav-item">
          <div className="icon trends"></div>
        </div>
        <div className="nav-item">
          <div className="icon profile"></div>
        </div>
        <div className="nav-item">
          <div className="icon chat"></div>
        </div>
        <div className="nav-item">
          <div className="icon location"></div>
        </div>
        <div className="nav-item">
          <div className="icon settings"></div>
        </div>
        <div className="nav-item">
          <div className="icon payment"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;