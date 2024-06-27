import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation({activePage, handlePageTransition}){
    return(<Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Content Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handlePageTransition} valuekey='home' active={activePage === 'home'}>Home</Nav.Link>
            <Nav.Link onClick={handlePageTransition} valuekey='customers' active={activePage === 'customers'}>Customers</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>);
}