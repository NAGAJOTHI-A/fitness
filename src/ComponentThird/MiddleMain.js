import FirstLine from './FirstLine';
import BigCharts from './BigCharts';
import './MiddleMain.css';
import Trainers from './Trainers';
import TrainersFood from './TrainersFood';

function MiddleMain(){
   return <div className='middlechart'>
    <div className='welcome'>
    <h5>Good Morning</h5>
    <h3>Welcome Back 🎉</h3>
    </div>
    <FirstLine/>
    <BigCharts/>
    <Trainers/>
    <TrainersFood/>
   </div>
}
export default MiddleMain;