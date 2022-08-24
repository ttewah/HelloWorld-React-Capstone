import "./Technician.css";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

const Technician = () => {
  let inputRef = useRef(null);
  let inputRef1 = useRef(null);

  let [techName, getTechName] = useState([]);
  let [issue, getIssue] = useState([]);
  let [techNameId, setTechNameId] = useState("");
  let [issueId, setIssueId] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("http://localhost:5150/Technician");
      getTechName(result.data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("http://localhost:5150/CustomerCategory");
      getIssue(result.data);
    };
    fetch();
  }, []);

  const onAccept = async () => {
    let technician = {
      tech_name: inputRef.current.value,
      customer_id: parseInt(inputRef1.current.value),
    };
    let r = await axios.put(`http://localhost:5150/Technician`, technician);
    console.log(r.data);
  };

  const onChange1 = (inputText) => {
    setTechNameId(inputText);
  };

  const onChange2 = (inputText) => {
    setIssueId(inputText);
  };

  return (
    <div>
      <div>
        Technician Name:<br></br>
        <select
          className="form-control col-md-3"
          ref={inputRef}
          value={techNameId}
          onChange={(e) => onChange1(e.target.value)}
        >
          <option>Select Name</option>

          {techName.map((s) => (
            <option key={s.tech_id} value={s.tech_name}>
              {s.tech_name}{" "}
            </option>
          ))}
        </select>
      </div>
      <div>
        Issue:<br></br>
        <select
          className="form-control col-md-3"
          ref={inputRef1}
          value={issueId}
          onChange={(e) => onChange2(e.target.value)}
        >
          <option>Select Issue</option>
          {issue.map((s) => (
            <option key={s.customer_name} value={s.customer_id}>
              {s.customer_name}-{s.category_name}{" "}
            </option>
          ))}
        </select>{" "}
        &nbsp;&nbsp; <button onClick={() => onAccept()}>Accept</button>
      </div>
    </div>
  );
};

export default Technician;
