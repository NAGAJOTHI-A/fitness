import React from 'react';
import './Steps.css';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faPersonRunning} from '@fortawesome/free-solid-svg-icons';
import ChartLine from './ChartLine';


function Steps(){
  return <div className='steps'>
    <div className='runstep'>
    <FontAwesomeIcon icon={faPersonRunning } className='stepicon'/>
    <h4>Steps</h4></div>
    <h5>0 steps</h5>
    <div className='stepchart'><ChartLine/></div>
  </div>
  
}
export default Steps;