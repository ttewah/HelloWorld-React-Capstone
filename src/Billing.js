import "./Billing.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Billing = () => {
  let [billing, getBillingReport] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("http://localhost:5150/BillingReport");
      getBillingReport(result.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>Customer Name</th>
            <th>Technician</th>
            <th>Issue</th>
            <th>Urgency</th>
            <th>Cost</th>
          </tr>
          {billing.map((b) => (
            <tr key={b.customer_name}>
              <td>{b.customer_name}</td>
              <td>{b.tech_name}</td>
              <td>{b.category_name}</td>
              <td>{b.urgency_name}</td>
              <td>{b.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
