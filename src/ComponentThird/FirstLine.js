import React from'react';
import Steps from './Steps';
import Water from './Water';
import Calory from './Calory';
import Heart from './Heart';
import './FirstLine.css';


function FirstLine(){
  return <div className='firstLineCont'>
    <div className='fLineStep'><Steps/></div>
    <div className='fLineWater'><Water/></div>
    <div className='flineCalory'><Calory/></div>
    <div className='flineHeart'><Heart/></div>
  </div>
}
export default FirstLine;