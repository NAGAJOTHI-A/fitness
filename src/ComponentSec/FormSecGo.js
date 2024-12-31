import './FormSecGo.css';
import { BrowserRouter, Link } from "react-router-dom";
function FormSecGo(){
   return <div className='formsecgo'>
        <div className='infogoall'>
         <Link to="/personal"><button className="infoo">PersonalInformation</button></Link>
         <button className='setgoall'>SetYourGoals</button>   
         </div> 
         </div>
} 
export default FormSecGo;