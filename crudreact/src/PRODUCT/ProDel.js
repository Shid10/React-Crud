import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export default function ProDel(props) {
    const [product, setProduct] = useState({});
    const { proid } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8082/api/productsbyid/" + proid)
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, [proid]);
    const handledelete = (event) => {
        alert(proid);
        fetch("http://localhost:8082/api/productsdelet/" + proid, {
            method: 'Delete'
        })
            .then(res => console.log(res))
        navigate('/Product');
    }
    const Cancle = (Cancle) => {
        navigate('/Product')
    }

    return (
        <div className="container">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title" style={{color:"red"}}>Are you sure?</h1>
            <div className="mb-3">
              <label className="form-label">Id:</label>
              <span className="form-text">{product.proid}</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <span className="form-text">{product.proname}</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Category:</label>
              <span className="form-text">{product.category}</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity:</label>
              <span className="form-text">{product.quantity}</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Price:</label>
              <span className="form-text">{product.price}</span>
            </div>
            <form>
              <button onClick={handledelete} className="btn btn-danger me-2">Delete</button>
              <button onClick={Cancle} className="btn btn-secondary">Cancel</button>
            </form>
          </div>
        </div>
      </div>
      
    );
}
