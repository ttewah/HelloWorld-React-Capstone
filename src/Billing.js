import './Billing.css'
import axios from "axios";
import { useState} from 'react'

const Billing = () => {
    
    let[billing, getBillingReport] = useState([])

    // useEffect(() => {
    //     const fetch = async () => {
    //       const result = await axios.get("http://localhost:5150/BillingReport");
    //       getBillingReport(result.data);
    //     };
    //     fetch();
    //   }, []);

      const onHandleClick = async ()=>{
        let result = await axios.get("http://localhost:5150/BillingReport");
        getBillingReport (result.data)
        console.log(result.data)
      }

      

    return (
        <div>
      <button  onClick={() => onHandleClick()}>Billing Report</button>
      <table className="table">
        <tbody>
          {billing.map((b) => (
            <tr key={b.customer_id} >
              <td>Customer:{b.customer_name}</td>
              <td>Technician:{b.tech_name}</td>
              <td>Issue:{b.category_name}</td>
              <td>Urgency:{b.urgency_name}</td>
              <td>Cost:{b.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  };
  
  export default Billing;