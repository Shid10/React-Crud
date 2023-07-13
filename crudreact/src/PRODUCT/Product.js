import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Product(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8082/api/products")
        .then((res) => res.json())
        .then((result) => {
          setProduct(result);
        });
    } catch (error) {
      <h1 style={{ color: "red" }}>Fail to Connect Server:{error}</h1>;
    }
  }, []);

  return (
    <div>
      <h1 style={{ color: "bisque", backgroundColor: "darkcyan" }}>Product List...</h1>
      <h1 style={{ color: "goldenrod" }}>Fetch data using "Java Spring Tool"...</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th colSpan={3} style={{ textAlign: "center" }}>
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) => (
            <tr key={p.proid}>
              <td>{p.proid}</td>
              <td>{p.proname}</td>
              <td>{p.category}</td>
              <td>{p.quantity}</td>
              <td>{p.price}</td>
              <td>
                <Button variant="primary" href={"/prod/" + p.proid}>
                  Display
                </Button>
              </td>
              <td>
                <Button variant="warning" href={"/prodedit/" + p.proid}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" href={"/proddel/" + p.proid}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
