import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation(){
    return(<Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Form App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Customers</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>);
}