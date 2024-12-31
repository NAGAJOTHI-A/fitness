import React from "react";
import './Running.css';



function Running(){
  return <>
   <div className="runcard">
      <div className="runkm">
      <div className='usericon'>                       
          🏃‍♀️</div>                         
         <h3>Running</h3> </div>                     
         <p>0km</p>                            
    </div>
    <div className="runcard">
      <div className="runkm">
      <div className='usericon'>                       
          😴</div>                         
         <h3>Sleeping </h3> </div>                    
         <p>0hrs</p>                             
    </div>
    <div className="runcard">
      <div className="runkm">
      <div className='usericon'>                       
          🔥</div>                         
         <h3>Weight Loss </h3> </div>                    
         <p>0kg</p>                             
    </div>
  </>;
}
export default Running;