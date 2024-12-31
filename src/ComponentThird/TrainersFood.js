
import React from "react";
import "./TrainersFood.css";

const TrainersFood = () => {
  return (
    <div className="trainer-section">
      {/* Trainer 1 */}
      <div className="breakfast-card">
        <h4>Diet Breakfast Plan</h4>
        {/* Avocado Salad */}
        <div className="meal">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.ae-iip_goIUtH1Hr_DOH_wHaHa&pid=Api&P=0&h=180"
            alt="Avocado Salad"
            className="meal-photo"
          />
          <div>
            <p>Avocado Salad</p>
            <div className="nutrient-bar-wrapper">
              <div className="nutrient-labels">
                <span>8% carbs</span>
                <span>16% protein</span>
                <span>6% fat</span>
              </div>
              <div className="nutrient-bar">
                <span className="carbs" style={{ width: "8%" }}></span>
                <span className="protein" style={{ width: "16%" }}></span>
                <span className="fat" style={{ width: "6%" }}></span>
              </div>
            </div>
          </div>
        </div>

        {/* Blueberry */}
        <div className="meal">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Y5j4-7zdxzOagCarESgPlgHaHa&pid=Api&P=0&h=180"
            alt="Blueberry"
            className="meal-photo"
          />
          <div>
            <p>Blueberry</p>
            <div className="nutrient-bar-wrapper">
              <div className="nutrient-labels">
                <span>8% carbs</span>
                <span>16% protein</span>
                <span>6% fat</span>
              </div>
              <div className="nutrient-bar">
                <span className="carbs" style={{ width: "8%" }}></span>
                <span className="protein" style={{ width: "16%" }}></span>
                <span className="fat" style={{ width: "6%" }}></span>
              </div>
            </div>
          </div>
        </div>

    </div></div>
  );
};

export default TrainersFood;