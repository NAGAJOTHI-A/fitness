import './BigCharts.css';
import Activityy from './Activityy';
import Progres from './Progres';

function BigCharts(){
    return <div className='biggcharts'>
       <div className='firstact'><Activityy/></div>
       <div className='secprogres'><Progres/></div>
    </div>
}
export default BigCharts;