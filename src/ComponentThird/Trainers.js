
import React from "react";
import "./Trainers.css";

const Trainers = () => {
  return (
    <div className="trainerprofile">
      <h4>Our Top Trainers</h4>
    <div className="trainer-section">
      {/* Trainer 1 */}
      <div className="trainer-card">
        <div className="trainer-bg">
          <div className="trainer-profile">
            <img
              src="https://i.pinimg.com/originals/a4/e9/a5/a4e9a5c16996f177a0dc6ee53e7a11b8.jpg"
              alt="Trainer Profile"
              className="trainer-photo"
            />
          </div>
        </div>
        <div className="trainer-info">
          <h3>Iris Kyle </h3>
          <p>Fitness Specialist</p>
          <div className="trainer-stats">
            <span>⭐ 25</span>
            <span>🌟 104</span>
          </div>
          <button className="view-profile">View Profile</button>
        </div>
      </div>
      <div className="trainer-card">
        <div className="trainer-bg">
          <div className="trainer-profile">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.LAHg_dBEtlQ3YD445GbkogHaLF&pid=Api&P=0&h=180"
              alt="Trainer Profile"
              className="trainer-photo"
            />
          </div>
        </div>
        <div className="trainer-info">
          <h3>Cameron Williamson</h3>
          <p>Fitness Specialist</p>
          <div className="trainer-stats">
            <span>⭐ 25</span>
            <span>🌟 104</span>
          </div>
          <button className="view-profile">View Profile</button>
        </div>
      </div>

    </div></div>
  );
};

export default Trainers;