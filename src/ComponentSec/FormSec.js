import './FormSec.css';
import { BrowserRouter, Link } from "react-router-dom";

function FormSec(){
   return <div className='formsec'>
        <div className='infogoal'>
         <button className="info">PersonalInformation</button>
        
         <Link to="/goal"><button className='setgoal'>SetYourGoals</button></Link>
         </div> 
         </div>
} 
export default FormSec;