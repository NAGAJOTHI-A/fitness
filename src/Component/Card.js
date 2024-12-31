import React from "react";
import './Card.css';
import UserCard from "./UserCard";
import ZeroPercent from "./ZeroPercent";
import WeightCard from "./WeightCard";
import Running from "./Running";
import Yoga from "./Yoga";



function Card(){ 

  return         <div className="cards">
                <UserCard/>
                <ZeroPercent/>
                <WeightCard/>
                <div className="sleep">
                <h4>Your Goals</h4></div>
                <Running/>
                <div className="sleep">
                <h4>Scheduled</h4></div>
                <Yoga/>
                </div>
        
    
  ;
}
export default Card;