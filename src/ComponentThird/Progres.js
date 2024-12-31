import BigDoughnut from './BigDoughnut';
import './Progres.css';

function Progres(){
    return <div className='prog'>
    <div className='weekpro'>
        <h5>Progress</h5>
        <select value="progress">
            <option value="Weekly">Weekly</option>
             <option value="Monthly">Monthly</option>
          </select>
    </div>
    <div className='doughchart'>
     <BigDoughnut/>
    </div>
    </div>
}
export default Progres;