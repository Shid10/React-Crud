import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from './Home';
import Contact from './Contact';
import GetEmp from './EMPLOYEE/GetEmp';
import Nopage from './Nopage';
import Employee from './EMPLOYEE/Employee'
import UserList from './USER/User';
import EmpEdit from './EMPLOYEE/EmpEdit';
import EmpDel from './EMPLOYEE/EmpDel';
import EmpAdd from './EMPLOYEE/EmpAdd';
import GetUser from './USER/GetUser';
import Product from './PRODUCT/Product';
import GetPro from './PRODUCT/GetPro';
import ProDel from './PRODUCT/ProDel';
import ProEdit from './PRODUCT/ProEdit';
import ProAdd from './PRODUCT/ProAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="Home" element={<Home />} />
          <Route path="Contactus" element={<Contact />} />
          {/* Extra Link
          <Route path="GetEmp" element={<GetEmp />} /> */}
          <Route path="Employee" element={<Employee />} />
          <Route path="emp/:id" element={<GetEmp />} />
          <Route path="empedit/:id" element={<EmpEdit />} />
          <Route path="empdel/:id" element={<EmpDel/>}/>
          <Route path="empadd" element={<EmpAdd/>}/>
          <Route path="User" element={<UserList />} />
          <Route path="GetUser" element={<GetUser />} />
          <Route path="Product" element={<Product/>} />
          <Route path="prod/:proid" element={<GetPro />} />
          <Route path="proddel/:proid" element={<ProDel />} />
          <Route path="prodedit/:proid" element={<ProEdit />} />
          <Route path="AddPro" element={<ProAdd/>}/>
          
          <Route path="*" element={<Nopage />} />

        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
