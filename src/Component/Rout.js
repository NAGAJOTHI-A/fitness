import React from 'react';
import { BrowserRouter,Routes,Route}  from 'react-router-dom';
import ExacFormOne from '../ComponentSec/ExacFormOne';


function Rout(){
    return <>
     <BrowserRouter>
     <Routes>
        <Route path='/personal' element={<ExacFormOne/>}/>
        <Route path='/goal' element={<ExacFormTwo/>}/>
        <Route path='/' element={<ExactMainMiddle/>}/>
     </Routes>
     </BrowserRouter>
    </>;
}
export default Rout;