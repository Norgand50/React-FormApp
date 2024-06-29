import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Controllers/utils.css'


export default function CustomerIndex({customers, handleEdit, handleDelete}){

  //console.log(customers);
  
    return(
        <Container className='mt-2'>
        <Row>
          <Col></Col>
          <Col><h1 style={{textAlign: 'center', color: 'white'}}>Customers</h1></Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-md-center">
          {/* className='col-xl-10' */}
          <Col md="auto" >    
          <Table striped bordered hover data-bs-theme="dark" size="sm" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => 
            <tr key={index}>
            <td key={"id" + index}>{customer.id || ""}</td>
            <td key={"code"+ index}>{customer.code || ""}</td>
            <td key={"name"+ index}>{customer.first_name || ""}</td>
            <td key={"surname"+ index}>{customer.last_name || ""}</td>
            <td key={"email"+ index}>{customer.email || ""}</td>
            <td key={"address"+ index}>{customer.address || ""}</td>
            <td key={"active"+ index}>{(customer.active ? "Active" : "Terminate") || ""}</td>
            <td key={"action"+ index}><img src={'/images/edit.svg'} alt="" className='iconbtn' value={customer.id || ""} onClick={handleEdit}/> <img src={'/images/x-circle.svg'} alt="" className='iconbtn' value={customer.id || ""} onClick={handleDelete}/></td>
            </tr>
          )}
        </tbody>

      </Table></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col> {customers.length === 0 ? <h2 style={{color: 'white'}}>No Records Found.</h2> : ""}</Col>
        <Col></Col>
        </Row>
      </Container>
);
}