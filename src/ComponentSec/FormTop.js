import './FormTop.css';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import {faUser } from '@fortawesome/free-regular-svg-icons';

function FormTop(){
    return <div className='formtop'>   
             <FontAwesomeIcon icon={faUser} className='uicon'/>  
             <h3>Set Your Profile</h3>
             <FontAwesomeIcon icon={faXmark} className='xicon'/>
            </div>;
}
export default FormTop;