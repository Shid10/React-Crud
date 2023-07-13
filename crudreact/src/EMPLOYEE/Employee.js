import React from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

export default function ListEmp(props) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    try {
      fetch("https://localhost:44360/api/Employee")
        .then((res) => res.json())
        .then((result) => {
          setEmployees(result);
        });
    } catch (error) {
      <h1 style={{ color: "red" }}>Fail to Connect Server:{error}</h1>;
    }
  }, []);

  return (
    <div>
      <h1 style={{ color: "lightblue" }}>Employees Data...</h1>
      <h1 style={{ color: "goldenrod" }}>Fetch data using .NET Web...</h1>
      <Table responsive border={3}>
        <thead border={3}>
          <tr>
            <th style={{ backgroundColor: "#FFA500", color: "#FFFFFF" }}>Id</th>
            <th style={{ backgroundColor: "#FFA500", color: "#FFFFFF" }}>Name</th>
            <th style={{ backgroundColor: "#FFA500", color: "#FFFFFF" }}>Email</th>
            <th style={{ backgroundColor: "#FFA500", color: "#FFFFFF" }}>Department</th>
            <th style={{ backgroundColor: "#FFA500", color: "#FFFFFF" }}>Age</th>
            <th colSpan={3} style={{ backgroundColor: "#FFA500",textAlign: "center", color: "#FFFFFF"}}>
              Operations
            </th>
          </tr>
        </thead>
        <tbody border={2}>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.age}</td>
              <td>
                <Button variant="info" href={"/emp/" + emp.id}>
                  Display
                </Button>
              </td>
              <td>
                <Button variant="warning" href={"/empedit/" + emp.id}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" href={"/empdel/" + emp.id}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
