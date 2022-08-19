import { useRef } from 'react'

const Customer = () => {
    let inputRef = useRef(null);
   
    return (
        <div>
            <div>
            Customer Name:<br></br>
            <input  ref={inputRef} placeholder="Full Name"></input>
            </div>
            <div>
            Category:<br></br>
            <select ><option >Select Category</option></select>
            </div>
            <div>
            Urgency:<br></br>
            <select ><option value="A">Select Urgency</option></select>     <button>Submit</button>
            </div>
        </div>
        
    
    
    
    

   
    
  )
}
export default Customer;
