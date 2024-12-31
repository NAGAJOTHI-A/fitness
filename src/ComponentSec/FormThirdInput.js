import './FormThird.css';
function FormThird(){
 return <div className='forminput'>
   <form>
        <input type="text" placeholder="Steps per day"/>
        <input type="text" placeholder="Running per day in km" />
        <input type="text" placeholder="Sleep per day in hours" />
        <input type="text" placeholder="Together weight in kg" />
        <input type="text" placeholder="Water Ltr per day"/>
    </form>
 </div>
}

export default FormThird;