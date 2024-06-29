import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navigation({activePage, handlePageTransition}){
    return(
    // <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    //     <Container>
    //       <Navbar.Brand href="#home">Content Management</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link onClick={handlePageTransition} valuekey='home' active={activePage === 'home'}>Home</Nav.Link>
    //         <Nav.Link onClick={handlePageTransition} valuekey='customers' active={activePage === 'customers'}>Customers</Nav.Link>
    //         {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    //       </Nav>
    //     </Container>
    //   </Navbar>
    
    <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid = {true}>
        <Navbar.Brand href="#home">Content Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={handlePageTransition} valuekey='home' active={activePage === 'home'}>Home</Nav.Link>
          <Nav.Link onClick={handlePageTransition} valuekey='customers' active={activePage === 'customers'}>Customers</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}