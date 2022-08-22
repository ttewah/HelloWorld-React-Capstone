import "./Customer.css";

import axios from "axios";
import { useRef, useState, useEffect } from "react";

const Customer = () => {
  let inputRef = useRef(null);
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);
  let [category, getCategory] = useState([]);
  let [urgency, getUrgency] = useState([]);
  let [categoryId, setCategoryId] = useState("");
  let [urgencyId, setUrgencyId] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("http://localhost:5150/Category");
      getCategory(result.data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("http://localhost:5150/Urgency");
      getUrgency(result.data);
    };
    fetch();
  }, []);

  const onSubmit = async () => {
    let customer = {
      customer_name: inputRef.current.value,
      category_id: parseInt(inputRef1.current.value),
      urgency_id: parseInt(inputRef2.current.value),
    };
    let r = await axios.post(`http://localhost:5150/Customer`, customer);
    console.log(r.data);
  };

  const onChange1 = (inputText) => {
    setCategoryId(inputText);
  };

  const onChange2 = (inputText) => {
    setUrgencyId(inputText);
  };

  return (
    <div>
      <div>
        Customer Name:<br></br>
        <input ref={inputRef} placeholder="Full Name"></input>
      </div>
      <div>
        Category:<br></br>
        <select
          className="form-control col-md-3"
          ref={inputRef1}
          value={categoryId}
          onChange={(e) => onChange1(e.target.value)}
        >
          <option> Select Category</option>
          {category.map((s) => (
            <option key={s.category_id} value={s.category_id}>
              {s.category_name}{" "}
            </option>
          ))}
        </select>
      </div>
      <div>
        Urgency:<br></br>
        <select
          className="form-control col-md-3"
          ref={inputRef2}
          value={urgencyId}
          onChange={(e) => onChange2(e.target.value)}
        >
          <option>Select Urgency</option>
          {urgency.map((s) => (
            <option key={s.urgency_id} value={s.urgency_id}>
              {s.urgency_name}{" "}
            </option>
          ))}
        </select>{" "}
        &nbsp;&nbsp;
        <button onClick={() => onSubmit()}>Submit</button>
      </div>
    </div>
  );
};
export default Customer;

// useEffect(function() {
//     axios
//     .get("http://localhost:5150/Urgency")
//     .then((response)=> getUrgency(response.data)) ===> you could also write the geturgency and get category codes in this manner
//     .then((error)=> console.log(error));
// }, []);

// const onSubmit = () =>{
//     axios
//     .post("http://localhost:5150/Customer")
//     .then((response)=> setSubmit(response.data))
//     .then((error)=> console.log(error));

// }
