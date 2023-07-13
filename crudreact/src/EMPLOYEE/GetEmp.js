import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmpCard from './EMpCard';

export default function GetEmp() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams()
  useEffect(() => {
    fetch("https://localhost:44360/api/Employee/" + id)
      .then(res => res.json())
      .then((result) => { setEmployee(result); }
      );
  }, [id]);
  return (
    
    <div>
      <EmpCard key={id} myemp={employee}/>

    </div>
  );
}
  

