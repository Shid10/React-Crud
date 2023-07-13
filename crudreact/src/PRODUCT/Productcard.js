import Card from 'react-bootstrap/Card';

export default function Productcard({mypro}) {
  return (
    <Card style={{ width: '18rem', margin: "50px", background: "lavender"}}>
      <Card.Body>
        <Card.Title style={{ color: "#FF5722" }}>Product Details</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Product</Card.Subtitle>
        <Card.Text style={{ color: "#FF4081" }}>
         {mypro.proid}
         </Card.Text>
         <Card.Text style={{ color: "#FF4081" }}>
         {mypro.proname}
         </Card.Text>
         <Card.Text style={{ color: "#FF4081" }}>
         {mypro.category}
         </Card.Text>
         <Card.Text style={{ color: "#FF4081" }}>
         {mypro.quantity}
         </Card.Text>
         <Card.Text style={{ color: "#FF4081" }}>
         {mypro.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

