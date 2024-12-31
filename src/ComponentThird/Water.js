import React from 'react';
import ChartThird from './ChartThird';
import './Water.css';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faDroplet} from '@fortawesome/free-solid-svg-icons';


function Water(){
  return <div className='water'>
    <div className='waterdrop'>
    <FontAwesomeIcon icon={faDroplet} className='watericon'/>
    <h4>Water</h4></div>
    <div className='liters'><ChartThird/></div>
  </div>
}
export default Water;