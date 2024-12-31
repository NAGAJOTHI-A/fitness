import './FormBot.css';
import { BrowserRouter, Link } from "react-router-dom";
function FormBot(){
  return <div className='formbot'>
    <Link to="/home"><button className="canbtn">Cancel</button></Link>
   <button className="savbtn">Save</button>
  </div>
}
export default FormBot;