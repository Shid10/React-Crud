import { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function EmpAdd(props) {
    const [employee, setEmployee] = useState({});
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);
        console.log(JSON.parse(demo));
        fetch("https://localhost:44360/api/Employee", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => r.json()).then((data) => data)
        event.preventDefault();
        navigate('/Employee');
        alert(employee);
    }
    return (
        <form onSubmit={handleSubmit} style={{ background: "lightblue", padding: "10px", borderRadius: "25px",width: "50%" }}>
        <div className="mb-3">
          <label className="form-label">Id:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%" }}
            name="id"
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%" }}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%" }}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Department:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%" }}
            name="department"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%" }}
            name="age"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
      

    );
} 
