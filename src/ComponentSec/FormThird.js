import './FormThird.css';
function FormThird(){
 return <div className='forminput'>
   <form>
         <input type="text" placeholder="Full Name"/>
        <input type="text" placeholder="Your Location" />
        <input type="text" placeholder="Date of Birth" onFocus={(e) => (e.target.type = 'date')}/>
        <input type="text" placeholder="Your Height in cm" />
        <input type="text" placeholder="Your Weight in kg"/>
    </form>
 </div>
}

export default FormThird;