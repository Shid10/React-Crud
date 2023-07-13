import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header() {
    return (
<div>
  <Navbar bg="success" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home" style={{ color: 'lightblue', fontFamily: "cursive" }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Contactus" style={{  color: 'lightblue', fontFamily: "cursive" }}>
            Contact Us
          </Nav.Link>
          <Nav.Link as={Link} to="/Extra" style={{  color: 'lightblue', fontFamily: "cursive" }}>
            Extra
          </Nav.Link>

          <NavDropdown title="Java" id="java-dropdown" style={{color: 'lightblue', fontFamily: "cursive"}} menuVariant="dark">
            <NavDropdown.Item as={Link} to="/Product" style={{ color: 'yellow' }}>
              Product Data
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/AddPro" style={{ color: 'yellow' }}>
              Add Product
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/User" style={{ color: 'yellow' }}>
              User Data
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/GetUser" style={{ color: 'yellow' }}>
              Add User
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title=".Net" id="dotnet-dropdown" style={{color: 'lightblue', fontFamily: "cursive"}} menuVariant="dark">
            <NavDropdown.Item as={Link} to="/Employee" style={{ color: 'yellow' }}>
              Employee Data
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/empadd" style={{ color: 'yellow' }}>
              Add Employee
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>

    )
}
