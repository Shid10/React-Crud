import { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function ProAdd(props) {
    const [product, setProduct] = useState({});
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8082/api/productsadd", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then((data) => data)
        event.preventDefault();
        navigate('/Product');
        alert(product);
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="row">
            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="proid"  className="form-label">Id:</label>
                <input
                  type="text"
                  className="form-control" bg="danger"
                  id="proid"
                  name="proid"
                  onChange={handleChange}
                  disabled
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="proname" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="proname"
                  name="proname"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category:</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity:</label>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price:</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      
    );
} 
