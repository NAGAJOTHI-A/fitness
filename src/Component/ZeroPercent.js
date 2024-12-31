import './ZeroPercent.css';
import { Link} from "react-router-dom";


function ZeroPercent(){
        return  <div className='zerocard'>
        <div className='setf'>
        <div className='zsetf'><h3 >0%</h3></div></div>
        <div className="set">
        <h5>Your Profile set</h5>
        <Link to="/personal"><button className="save_btn">EditYourProfile</button></Link>
        </div>
     </div>
    }   
  export default ZeroPercent;             