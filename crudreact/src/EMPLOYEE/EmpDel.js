import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export default function EmpDel(props) {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:44360/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, [id]);
    const handledelete = (event) => {
        alert(id);
        fetch("https://localhost:44360/api/Employee/" + id, {
            method: 'Delete'
        })
            .then(res => console.log(res))
        navigate('/Employee');
    }
    const Cancel = (Cancel) => {
        navigate('/Employee')
    }

    return (
        <div className="container">
        <div className="employee-details" style={{ backgroundColor: "#F5ECEB", border: "2px solid #FF4081", padding: "20px", borderRadius: "10px" }}>
          <h1 className="section-title" style={{ color: "#FF4081", fontSize: "24px", textAlign: "center", marginBottom: "30px" }}>Are you sure?</h1>
          <div className="details-container" style={{ marginBottom: "20px" }}>
            <div className="detail-row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <label className="detail-label" style={{ color: "#007BFF", fontWeight: "bold", width: "100px" }}>Id:</label>
              <span className="detail-value" style={{ marginLeft: "10px", color: "#343A40", fontWeight: "bold" }}>{employee.id}</span>
            </div>
            <div className="detail-row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <label className="detail-label" style={{ color: "#007BFF", fontWeight: "bold", width: "100px" }}>Name:</label>
              <span className="detail-value" style={{ marginLeft: "10px", color: "#343A40", fontWeight: "bold" }}>{employee.name}</span>
            </div>
            <div className="detail-row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <label className="detail-label" style={{ color: "#007BFF", fontWeight: "bold", width: "100px" }}>Email:</label>
              <span className="detail-value" style={{ marginLeft: "10px", color: "#343A40", fontWeight: "bold" }}>{employee.email}</span>
            </div>
            <div className="detail-row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <label className="detail-label" style={{ color: "#007BFF", fontWeight: "bold", width: "100px" }}>Department:</label>
              <span className="detail-value" style={{ marginLeft: "10px", color: "#343A40", fontWeight: "bold" }}>{employee.department}</span>
            </div>
            <div className="detail-row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <label className="detail-label" style={{ color: "#007BFF", fontWeight: "bold", width: "100px" }}>Age:</label>
              <span className="detail-value" style={{ marginLeft: "10px", color: "#343A40", fontWeight: "bold" }}>{employee.age}</span>
            </div>
          </div>
          <form className="action-buttons" style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <button className="btn btn-danger" onClick={handledelete} style={{ backgroundColor: "#FF4081", borderColor: "#FF4081", color: "#FFFFFF", padding: "10px 20px", fontWeight: "bold", marginRight: "10px" }}>Delete</button>
            <button className="btn btn-secondary" onClick={Cancel} style={{ backgroundColor: "#007BFF", borderColor: "#007BFF", color: "#FFFFFF", padding: "10px 20px", fontWeight: "bold" }}>Cancel</button>
          </form>
        </div>
      </div>
      
      
      
    );
}
