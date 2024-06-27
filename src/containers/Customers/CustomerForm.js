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
    first_name: "",
    last_name:  "",
    company_name: "",
    address: "",
    city: "",
    county: "",
    state: "",
    web: "",
    email:  "",
    phone1:  "",
    phone2:  "",
    zip:  0,
    active:  true});

useEffect(() =>{

  setCustomer(prev => ({...prev, id: selectedCustomer.id || 0, 
    code: selectedCustomer.code || "", 
    first_name: selectedCustomer.first_name || "",
    last_name: selectedCustomer.last_name || "",
    company_name: selectedCustomer.company_name || "",
    address: selectedCustomer.address || "",
    city: selectedCustomer.city || "",
    county: selectedCustomer.county || "",
    state: selectedCustomer.state || "",
    web: selectedCustomer.web || "",
    email: selectedCustomer.email || "",
    phone1: selectedCustomer.phone1 || "",
    phone2: selectedCustomer.phone2 || "",
    zip: selectedCustomer.zip || 0,
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
      setCustomer(customers => ({...customers, 
        code: "", 
        first_name: "", 
        last_name: "",
        company_name: "",
        address: "",
        city: "",
        county: "",
        state: "",
        web: "", 
        email: "", 
        phone1: "", 
        phone2: "", 
        zip: 0, 
        active: true}));
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
          <Form.Group className="mb-3" controlId="formBasicFirstName" >
          <Form.Label className='text-light'>First Name</Form.Label>
          <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange={handleChange} value={customer.first_name}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastName" >
          <Form.Label className='text-light'>Last Name</Form.Label>
          <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange={handleChange} value={customer.last_name}/>
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
          <Form.Group className="mb-3" controlId="formBasicCompany" >
          <Form.Label className='text-light'>Company</Form.Label>
          <Form.Control type="text" name="company_name" placeholder="Enter Company" onChange={handleChange} value={customer.company_name}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicTelephone" >
          <Form.Label className='text-light'>Telephone</Form.Label>
          <Form.Control type="telephone" name="phone1" placeholder="Enter Telephone" onChange={handleChange} value={customer.phone1}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicMobile" >
          <Form.Label className='text-light'>Mobile</Form.Label>
          <Form.Control type="telephone" name="phone2" placeholder="Enter Mobile" onChange={handleChange} value={customer.phone2}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicWeb" >
          <Form.Label className='text-light'>Website</Form.Label>
          <Form.Control type="text" name="web" placeholder="Enter Website" onChange={handleChange} value={customer.web}/>
        </Form.Group>
          </Col>
          </Row>

          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicAddress" >
          <Form.Label className='text-light'>Address</Form.Label>
          <Form.Control type="text" name="address" placeholder="Enter Address" onChange={handleChange} value={customer.address}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicCity" >
          <Form.Label className='text-light'>City</Form.Label>
          <Form.Control type="text" name="city" placeholder="Enter City" onChange={handleChange} value={customer.city}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicCounty" >
          <Form.Label className='text-light'>County</Form.Label>
          <Form.Control type="text" name="county" placeholder="Enter County" onChange={handleChange} value={customer.county}/>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicZip" >
          <Form.Label className='text-light'>Zip</Form.Label>
          <Form.Control type="number" name="zip" placeholder="Enter Zip"  onChange={handleChange} value={customer.zip}/>
        </Form.Group>
          </Col>
          </Row>

          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicState" >
          <Form.Label className='text-light'>State</Form.Label>
          <Form.Control type="text" name="state" placeholder="Enter State" onChange={handleChange} value={customer.state}/>
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
          <Col></Col>
          <Col></Col>
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