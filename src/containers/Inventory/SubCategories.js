import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Controllers/utils.css'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {SubCategoriesPath} from '../Controllers/ApiConnection';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function SubCategories(){
    const [subCategories, setsubCategories] = useState([]);
    const [selectedSubCategory, setselectedSubCategory] = useState({category_name: '', active: true});
    const [showAlert, setShowAlert] = useState(false);
    const [errorMsg, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);


    useEffect(() =>{
        LoadDataFromServer();
    },[])

    function LoadDataFromServer(){
        axios.get(SubCategoriesPath())
        .then(response => {
            const responseData = response.data;
            setsubCategories(responseData);
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message);
            setShowAlert(true);
        });
    }

    function AddNewCategoryToServer(data){
        axios.post(SubCategoriesPath(), data)
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

    function UpdateCategoryToServer(data){
        axios.put(SubCategoriesPath() + '/' + data.id, data)
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

    function DeleteCategoryFromServer(id){
        axios.delete(SubCategoriesPath() + '/' + id)
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
        setselectedSubCategory(subCategories.find(x => x.id === id));
       // setActiveForm(1);
       handleShow();
   }

   function handleDelete({target}){
        const id = Number(target.getAttribute("value"));
        DeleteCategoryFromServer(id);
      
   }

   function handleNewRecord(){
    setselectedSubCategory({category_name: '', active: true});
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
 
       setselectedSubCategory(selectedSubCategory => ({...selectedSubCategory, [name]: value}))
   }

   function handleAddUpdate(){
    if(selectedSubCategory.id){
        UpdateCategoryToServer(selectedSubCategory);
    }
    else{
        AddNewCategoryToServer(selectedSubCategory)
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
      <Col><Button variant="primary" onClick={handleNewRecord}>New Sub Category</Button></Col>
      <Col><h1 style={{textAlign: 'center', color: 'white'}}>Sub Categories</h1></Col>
      <Col></Col>
    </Row>
    <Row className="justify-content-md-center">
      {/* className='col-xl-10' */}
      <Col md="auto" >    
      <Table striped bordered hover data-bs-theme="dark" size="lg" responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Sub Category Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {subCategories.map((subCategory, index) => 
        <tr key={index}>
        <td key={"id" + index}>{subCategory.id || ""}</td>
        <td key={"name"+ index}>{subCategory.sub_category_name || ""}</td>
        <td key={"active"+ index}>{(subCategory.active ? "Active" : "Terminate") || ""}</td>
        <td key={"action"+ index}><img src={'/images/edit.svg'} alt="" className='iconbtn' value={subCategory.id || ""} onClick={handleEdit}/> <img src={'/images/x-circle.svg'} alt="" className='iconbtn' value={subCategory.id || ""} onClick={handleDelete}/></td>
        </tr>
      )}
    </tbody>

  </Table></Col>
    </Row>
    <Row>
    <Col></Col>
    <Col> {subCategories.length === 0 ? <h2 style={{color: 'white'}}>No Records Found.</h2> : ""}</Col>
    <Col></Col>
    </Row>
    </Container>

    <Modal show={show} onHide={handleClose} bg="dark" data-bs-theme="dark">
    <Modal.Header closeButton>
      <Modal.Title className='text-white'>Sub Category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form data-bs-theme="dark"> 
    <Form.Group className="mb-3" controlId="formBasicCode" >
      <Form.Label className='text-light'>Sub Category Name</Form.Label>
      <Form.Control type="text" name="sub_category_name" placeholder="Enter Code" onChange={handleChange} value={selectedSubCategory.sub_category_name} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicActive" >
          <Form.Label className='text-light'>Active</Form.Label>
          <Form.Check // prettier-ignore
        type="switch"
        name="active"
        id="custom-switch"
        label="Active"
        onChange={handleChange}
        checked={selectedSubCategory.active}/>
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