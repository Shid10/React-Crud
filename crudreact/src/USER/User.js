import React, { useEffect, useState } from 'react';
//import "./App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the JSON data here
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  return (
    <div><b>
      <h1 style={{color:"goldenrod"}}>Fetch data using Spring Boot Tools...</h1>
      <table className="tableStyle">
        <thead style={{color:"maroon"}}>
          <tr>
            <th className='cellStyle'>ID</th>
            <th className='cellStyle'>Name</th>
            <th className='cellStyle'>Username</th>
            <th className='cellStyle'>Password</th>
            <th className='cellStyle'>Phone Numbers</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className='cellStyle'>{user.id}</td>
              <td className='cellStyle'>{user.name}</td>
              <td className='cellStyle'>{user.uname}</td>
              <td className='cellStyle'>{user.password}</td>
              <td className='cellStyle'>
                <ul className="listStyle">
                  {user.userphno.map((phone) => (
                    <li key={phone.id} className="listStyle li">
                      {phone.phoneno}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </b>
    </div>
  );
};


export default UserList;
