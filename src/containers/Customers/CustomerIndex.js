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
          <Col><h1 style={{textAlign: 'center'}}>Customers</h1></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className='col-xl-10'>    
          <Table striped bordered hover data-bs-theme="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => 
            <tr key={index}>
            <td key={"id" + index}>{customer.id}</td>
            <td key={"code"+ index}>{customer.code}</td>
            <td key={"name"+ index}>{customer.name}</td>
            <td key={"surname"+ index}>{customer.surname}</td>
            <td key={"email"+ index}>{customer.email}</td>
            <td key={"balance"+ index}>{customer.balance}</td>
            <td key={"active"+ index}>{customer.active ? "Active" : "Terminate"}</td>
            <td key={"action"+ index}><img src={'/images/edit.svg'} alt="" className='iconbtn' value={customer.id} onClick={handleEdit}/> <img src={'/images/x-circle.svg'} alt="" className='iconbtn' value={customer.id} onClick={handleDelete}/></td>
            </tr>
          )}
        </tbody>
      </Table></Col>
          <Col></Col>
        </Row>
      </Container>
);
}