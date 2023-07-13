import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function ProEdit(props) {
  const [product, setProduct] = useState({});
  const { proid } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8082/api/productsbyid/" + proid)
      .then(res => res.json())
      .then((result) => {
        setProduct(result);
      }
      );
  }, [proid]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    let demo = JSON.stringify(product);
    console.log(JSON.parse(demo));
    fetch("http://localhost:8082/api/productsupdate/" + proid, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: demo
    }).then(r => { console.log(r) })
    event.preventDefault();
    navigate('/Product');

    alert(product);
  }
  return (
    <div className="container">
      <h2>Edit Product List</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="proid">ID:</label>
          <input
            type="text"
            className="form-control"
            id="proid"
            name="proid"
            value={product.proid || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="proname">Name:</label>
          <input
            type="text"
            className="form-control"
            id="proname"
            name="proname"
            value={product.proname || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            className="form-control"
            id="quantity"
            name="quantity"
            value={product.quantity || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={product.price || ""}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
} 