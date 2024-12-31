import BigBarChart from './BigBarChart';
import './Activityy.css';

function Activityy(){
    return <div className='act'>
    <div className='week'>
        <h5>Activity</h5>
        <select value="progress">
            <option value="Weekly">Weekly</option>
             <option value="Monthly">Monthly</option>
          </select>
    </div>
    <div className='barchart'>
     <BigBarChart/>
    </div>
    </div>
}
export default Activityy;