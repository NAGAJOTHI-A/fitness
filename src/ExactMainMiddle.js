import './ExactMainMiddle.css';
import  Navigation from './ComponentThird/Navigation';

import  MiddleMain from './ComponentThird/MiddleMain';
import Card from './Component/Card';

function ExactMainMiddle(){
    return <div className='exactmiddle'>
        <Navigation/>
        <MiddleMain/>
        <Card/>
    </div>
}
export default ExactMainMiddle;