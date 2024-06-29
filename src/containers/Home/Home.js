import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../Controllers/utils.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Home(){
    return(
        <div>
        <section className='section_info mt-4'>
        <Container>
            <Row className='gy-4'>
                <Col className='col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                    <h1 className='white_text'>All in one content management application</h1>
                    <p className='white_text'>Raise your productivity with the all in one solution</p>
                    <div className='d-flex'>
                        <Button variant="info">Get Started</Button>
                    </div>
                </Col>
                <Col className='col-lg-6 order-1 order-lg-2'>
                <Image src="/images/home_img.png" fluid />
                </Col>
            </Row>
        </Container>
        </section>
        <section className='section_light mt-4'>
        <Container>
        <Row className='gy-4'>
            <Col>
                 <div style={{height: 80}}>
                    <p>Placeholder for trusted companies that use the application</p>
                    </div>       
            </Col>
        </Row>
        </Container>
        </section>
        <section className='section_white'>
        <Container>
        <Row className='gy-4'>
            <Col>
                <h1 className='text_center'>About Us</h1>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>    
            </Col>
        </Row>
        </Container>
        </section>
        <footer className="py-3 my-4" data-bs-theme="dark">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary white_text">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary white_text">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary white_text">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary white_text">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary white_text">About</a></li>
            </ul>
            <p className="text-center text-body-secondary white_text">© 2024 Company, Inc</p>
        </footer>
        </div>
    );
}