import './FormFirFull.css';
import FormTop from './FormTop';
import FormSecGo from './FormSecGo';
import FormThirdInput from './FormThirdInput';
import FormBot from './FormBot';

function FormSecFull(){
  
    return <div className='formpersonal'>
        <FormTop/>
        <FormSecGo/>
        <FormThirdInput/>
        <FormBot/>
    </div>
}

export default FormSecFull;