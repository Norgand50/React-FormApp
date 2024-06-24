import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function CustomerForm({selectedCustomer, sendDataToParent}){

  const [customer, setCustomer] = useState({
    id: 0, 
    code: "", 
    name: "",
    surname:  "",
    email:  "",
    telephone:  "",
    mobile:  "",
    balance:  0,
    active:  true});

useEffect(() =>{

  setCustomer(prev => ({...prev, id: selectedCustomer.id || 0, 
    code: selectedCustomer.code || "", 
    name: selectedCustomer.name || "",
    surname: selectedCustomer.surname || "",
    email: selectedCustomer.email || "",
    telephone: selectedCustomer.telephone || "",
    mobile: selectedCustomer.mobile || "",
    balance: selectedCustomer.balance || 0,
    active: selectedCustomer.active ? true : false}))
},[selectedCustomer]);


    const handleChange = (event) => {
      const name = event.target.name;
      let value;
      if(event.target.type === "checkbox"){
        value = event.target.checked;
      }
      else if(event.target.type === "number"){
        value = Number(event.target.value);
      }else{
        value = event.target.value;
      }

      setCustomer(customers => ({...customers, [name]: value}))
    }

    const handleClear = () =>{
      setCustomer(customers => ({...customers, code: "", name: "", surname: "", email: "", telephone: "", mobile: "", balance: 0, active: true}))
    }

  function handleSubmit(e){
  
    e.preventDefault();
  }

 function handleAction(){
  sendDataToParent(customer);
 }


    return(<Container className='mt-2'>
        <Row>
          <Col></Col>
          <Col><h1 className='text-light' style={{textAlign: 'center'}}>Customer</h1></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className='col-xl-10'>      
          <Form data-bs-theme="dark" onSubmit={handleSubmit}>
          <Container>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicCode" >
          <Form.Label className='text-light'>Code</Form.Label>
          <Form.Control type="text" name="code" placeholder="Enter Code" onChange={handleChange} value={customer.code} required/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicName" >
          <Form.Label className='text-light'>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" onChange={handleChange} value={customer.name}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicSurname" >
          <Form.Label className='text-light'>Surname</Form.Label>
          <Form.Control type="text" name="surname" placeholder="Enter Surname" onChange={handleChange} value={customer.surname}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label className='text-light'>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={customer.email}/>
        </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicTelephone" >
          <Form.Label className='text-light'>Telephone</Form.Label>
          <Form.Control type="telephone" name="telephone" placeholder="Enter Telephone" onChange={handleChange} value={customer.telephone}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicMobile" >
          <Form.Label className='text-light'>Mobile</Form.Label>
          <Form.Control type="telephone" name="mobile" placeholder="Enter Mobile" onChange={handleChange} value={customer.mobile}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicBalance" >
          <Form.Label className='text-light'>Balance</Form.Label>
          <Form.Control type="number" name="balance" placeholder="Enter Balance" step=".01" onChange={handleChange} value={customer.balance}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Label className='text-light'>Active</Form.Label>
          <Form.Check // prettier-ignore
        type="switch"
        name="active"
        id="custom-switch"
        label="Active"
        onChange={handleChange}
        checked={customer.active}/>
          </Col>
          </Row>
          </Container>
        <Button variant="primary" onClick={handleAction}>
          {customer.id === 0 ? "Add" : "Update"}
        </Button>
        <Button variant="secondary" onClick={handleClear} style={{marginLeft: 10}}>
          Clear
        </Button>
      </Form>  
</Col>
          <Col></Col>
        </Row>
      </Container>
    );
}