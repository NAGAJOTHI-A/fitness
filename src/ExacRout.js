import React from 'react';
import { Routes,Route,Router, BrowserRouter}  from 'react-router-dom';
import  Login from './ComponentFour/Login';
import  Register from './ComponentFour/Register';
import  ExactMainMiddle from './ExactMainMiddle';
import ExacFormOne from './ComponentSec/ExacFormOne';
import ExacFormTwo from './ComponentSec/ExacFormTwo';


function ExacRout(){
    return <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<ExactMainMiddle/>}/>
        <Route path='/personal' element={<ExacFormOne/>}/>
        <Route path='/goal' element={<ExacFormTwo/>}/>  
     </Routes>
     </BrowserRouter>
    </>;
}
export default ExacRout;