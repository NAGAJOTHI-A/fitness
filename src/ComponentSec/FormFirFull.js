import './FormFirFull.css';
import FormTop from './FormTop';
import FormSec from './FormSec';
import FormThird from './FormThird';
import FormBot from './FormBot';

function FormFirFull(){
    return <div className='formpersonal'>
        <FormTop/>
        <FormSec/>
        <FormThird/>
        <FormBot/>
    </div>
}

export default FormFirFull;