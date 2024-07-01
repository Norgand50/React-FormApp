import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Controllers/utils.css'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {BrandsPath} from '../Controllers/ApiConnection';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Brands(){

    const [brands, setBrands] = useState([]);
    const [selectedBrand, setselectedBrand] = useState({brand_name: '', active: true});
    const [showAlert, setShowAlert] = useState(false);
    const [errorMsg, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);



    useEffect(() =>{
        LoadDataFromServer();
    },[])

    function LoadDataFromServer(){
        axios.get(BrandsPath())
        .then(response => {
            const responseData = response.data;
            setBrands(responseData);
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message);
            setShowAlert(true);
        });
    }

    function AddNewBrandToServer(data){
        axios.post(BrandsPath(), data)
          .then(function (response) {
            console.log(response);
            LoadDataFromServer();
          })
          .catch(function (error) {
            console.log(error);
            setErrorMessage(error.message);
            setShowAlert(true);
          });
    }

    function UpdateBrandToServer(data){
        axios.put(BrandsPath() + '/' + data.id, data)
          .then(function (response) {
            console.log(response);
            LoadDataFromServer();
          })
          .catch(function (error) {
            console.log(error);
            setErrorMessage(error.message);
            setShowAlert(true);
          });
    }

    function DeleteBrandFromServer(id){
        axios.delete(BrandsPath() + '/' + id)
          .then(function (response) {
            console.log(response);
            LoadDataFromServer();
          })
          .catch(function (error) {
            console.log(error);
            setErrorMessage(error.message);
            setShowAlert(true);
          });
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleEdit({target}){
         const id = Number(target.getAttribute("value"));
         setselectedBrand(brands.find(x => x.id === id));
        // setActiveForm(1);
        handleShow();
    }

    function handleDelete({target}){
         const id = Number(target.getAttribute("value"));
         DeleteBrandFromServer(id);
       
    }

    function handleNewRecord(){
        setselectedBrand({brand_name: '', active: true});
        handleShow();
    }

    function handleChange(event){
        const name = event.target.name;
        let value;
        if(event.target.type === "checkbox"){
          value = event.target.checked;
        }
        else{
          value = event.target.value;
        }
  
        setselectedBrand(selectedBrand => ({...selectedBrand, [name]: value}))
    }

    function handleAddUpdate(){
        if(selectedBrand.id){
            UpdateBrandToServer(selectedBrand);
        }
        else{
            AddNewBrandToServer(selectedBrand)
        }
        handleClose();
    }

    let alert;
    if(showAlert){
        alert = (<Alert variant="danger" onClose={() => {setShowAlert(false); setErrorMessage('');}} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {errorMsg}
        </p>
      </Alert>);
    }

    return(
        <>
        {alert}
        <Container className='mt-2'>
          <Row>
          <Col><Button variant="primary" onClick={handleNewRecord}>New Brand</Button></Col>
          <Col><h1 style={{textAlign: 'center', color: 'white'}}>Brands</h1></Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-md-center">
          {/* className='col-xl-10' */}
          <Col md="auto" >    
          <Table striped bordered hover data-bs-theme="dark" size="lg" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Brand Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand, index) => 
            <tr key={index}>
            <td key={"id" + index}>{brand.id || ""}</td>
            <td key={"name"+ index}>{brand.brand_name || ""}</td>
            <td key={"active"+ index}>{(brand.active ? "Active" : "Terminate") || ""}</td>
            <td key={"action"+ index}><img src={'/images/edit.svg'} alt="" className='iconbtn' value={brand.id || ""} onClick={handleEdit}/> <img src={'/images/x-circle.svg'} alt="" className='iconbtn' value={brand.id || ""} onClick={handleDelete}/></td>
            </tr>
          )}
        </tbody>

      </Table></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col> {brands.length === 0 ? <h2 style={{color: 'white'}}>No Records Found.</h2> : ""}</Col>
        <Col></Col>
        </Row>
        </Container>

        <Modal show={show} onHide={handleClose} bg="dark" data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title className='text-white'>Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form data-bs-theme="dark"> 
        <Form.Group className="mb-3" controlId="formBasicCode" >
          <Form.Label className='text-light'>Code</Form.Label>
          <Form.Control type="text" name="brand_name" placeholder="Enter Code" onChange={handleChange} value={selectedBrand.brand_name} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicActive" >
              <Form.Label className='text-light'>Active</Form.Label>
              <Form.Check // prettier-ignore
            type="switch"
            name="active"
            id="custom-switch"
            label="Active"
            onChange={handleChange}
            checked={selectedBrand.active}/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}