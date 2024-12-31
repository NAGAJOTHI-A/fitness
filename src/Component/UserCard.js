import React from "react";
import './UserCard.css';

import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faUser } from '@fortawesome/free-regular-svg-icons';
import {faPowerOff,faLocationDot} from '@fortawesome/free-solid-svg-icons';

function UserCard(){
  return <>
   <div className="usecard">
      <div className='usepower'>                       
          <FontAwesomeIcon icon={faUser} className='usericon'/>                        
          <h3>Username </h3>        
          <FontAwesomeIcon icon={faPowerOff} className="powericon" /> 
      </div> 
      <div className="locat">
        <FontAwesomeIcon icon={faLocationDot} className="locicon"/>               
       <h5>Location</h5>   </div>                          
    </div>
  </>;
}
export default UserCard;