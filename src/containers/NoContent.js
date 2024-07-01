import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function NoContent(){
    return(<Container className='mt-2'>
        <Row className="justify-content-md-center">
        <Col md="auto" >
            <p className='text-light'>The content that request is under constraction...</p>
        </Col>
        </Row>
       </Container>
    );
}