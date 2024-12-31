import React from 'react';
import ChartSec from './ChartSec';
import './Heart.css';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faHeartPulse} from '@fortawesome/free-solid-svg-icons';


function Heart(){
  return <div className='heart'>
    <div className='pulserate'>
    <FontAwesomeIcon icon={faHeartPulse} className='hearticon'/>
    <h4>Heart Rate</h4></div>
    <div className='heartchart'><ChartSec/>
  </div></div>
}
export default Heart;