import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


export default function FormNavigator({handlePage}){
    return(
        <Card data-bs-theme="dark">
        <Card.Body>
        <Stack direction="horizontal" gap={3}>
        <Button variant="outline-secondary" onClick={handlePage} valuekey={0} size="sm"><img src={'/images/list.svg'} onClick={handlePage} valuekey={0}/></Button>
        <Button variant="outline-secondary" onClick={handlePage} valuekey={1} size="sm"><img src={'/images/plus-circle.svg'} onClick={handlePage} valuekey={1}/></Button>
      {/* <div className="p-2"></div>
      <div className="p-2"></div> */}
    </Stack>
        {/* <Container className='mt-0'>
        <Row>
        <Col md="auto"><Button variant="outline-secondary" onClick={handlePage} valuekey={0} size="sm"><img src={'/images/list.svg'} onClick={handlePage} valuekey={0}/></Button></Col>
        <Col md="auto"><Button variant="outline-secondary" onClick={handlePage} valuekey={1} size="sm"><img src={'/images/plus-circle.svg'} onClick={handlePage} valuekey={1}/></Button></Col>
        <Col></Col>
        </Row>
        </Container> */}
        </Card.Body>
      </Card>
    );
}