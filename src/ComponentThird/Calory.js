import React from 'react';
import ChartFour from './ChartFour';
import './Calory.css';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faFire} from '@fortawesome/free-solid-svg-icons';


function Calory(){
  return <div className='calory'>
    <div className='firecalory'>
    <FontAwesomeIcon icon={faFire} className='caloryicon'/>
    <h4>Calories</h4></div>
    <div className='calorychart'><ChartFour/></div>
  </div>
}
export default Calory;