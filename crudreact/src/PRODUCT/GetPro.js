import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productcard from './Productcard';


export default function GetPro() {
  const [product, setProduct] = useState({});
  const { proid } = useParams()
  useEffect(() => {
    fetch("http://localhost:8082/api/productsbyid/" + proid)
      .then(res => res.json())
      .then((result) => { setProduct(result); }
      );
  }, [proid]);
  return (
    
    <div>
      <Productcard key={proid} mypro={product}/>

    </div>
  );
}
  

