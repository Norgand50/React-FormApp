import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function FormNavigator({handlePage}){
    return(
        <Card data-bs-theme="dark">
        <Card.Body>
        <Container className='mt-0'>
        <Row>
        <Col md="auto"><Button variant="outline-secondary" onClick={handlePage} valuekey={0} size="sm"><img src={'/images/list.svg'} onClick={handlePage} valuekey={0}/></Button></Col>
        <Col md="auto"><Button variant="outline-secondary" onClick={handlePage} valuekey={1} size="sm"><img src={'/images/plus-circle.svg'} valuekey={1}/></Button></Col>
        <Col></Col>
        </Row>
        </Container>
        </Card.Body>
      </Card>
    );
}