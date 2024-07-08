import React, {useState, useEffect} from 'react'
import * as ApiConnection from '../Controllers/ApiConnection';

export default function Products({selectedProduct, handleError}){

    const [product, setProduct] = useState([{active: true}]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
;

    useEffect(() => {
        LoadAllData();
    }, [])

    function LoadAllData(){
        LoadBrands();
        LoadColors();
        LoadCategories();
        LoadSubCategories();
    }

    function LoadBrands(){
        axios.get(ApiConnection.BrandsPath())
        .then(response => {
            const responseData = response.data;
            setBrands(responseData);
        })
        .catch(error => {
            console.log(error);
            handleError(error.message);
        });
    }

    function LoadColors(){
        axios.get(ApiConnection.ColorsPath())
        .then(response => {
            const responseData = response.data;
            setColors(responseData);
        })
        .catch(error => {
            console.log(error);
            handleError(error.message);;
        });
    }

    function LoadCategories(){
        axios.get(ApiConnection.CategoriesPath())
        .then(response => {
            const responseData = response.data;
            setCategories(responseData);
        })
        .catch(error => {
            console.log(error);
            handleError(error.message);
        });
    }

    function LoadSubCategories(){
        axios.get(ApiConnection.SubCategoriesPath())
        .then(response => {
            const responseData = response.data;
            setSubCategories(responseData);
        })
        .catch(error => {
            console.log(error);
            handleError(error.message);
        });
    }




return(<Container className='mt-2'>
    <Row>
      <Col></Col>
      <Col><h1 className='text-light' style={{textAlign: 'center'}}>Product</h1></Col>
      <Col></Col>
    </Row>
    <Row className="justify-content-md-center">
      {/* <Col md="auto"></Col> */}
      <Col md="auto" >      
        <Form data-bs-theme="dark" onSubmit={handleSubmit}>

            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicCode" >
                        <Form.Label className='text-light'>Code</Form.Label>
                        <Form.Control type="text" name="code" placeholder="Enter Code" onChange={handleChange} value={customer.code} required/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicFirstName" >
                        <Form.Label className='text-light'>First Name</Form.Label>
                        <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange={handleChange} value={customer.first_name}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicLastName" >
                        <Form.Label className='text-light'>Last Name</Form.Label>
                        <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange={handleChange} value={customer.last_name}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className='text-light'>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={customer.email}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicCompany" >
                        <Form.Label className='text-light'>Company</Form.Label>
                        <Form.Control type="text" name="company_name" placeholder="Enter Company" onChange={handleChange} value={customer.company_name}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicTelephone" >
                        <Form.Label className='text-light'>Telephone</Form.Label>
                        <Form.Control type="telephone" name="phone1" placeholder="Enter Telephone" onChange={handleChange} value={customer.phone1}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicMobile" >
                        <Form.Label className='text-light'>Mobile</Form.Label>
                        <Form.Control type="telephone" name="phone2" placeholder="Enter Mobile" onChange={handleChange} value={customer.phone2}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicWeb" >
                        <Form.Label className='text-light'>Website</Form.Label>
                        <Form.Control type="text" name="web" placeholder="Enter Website" onChange={handleChange} value={customer.web}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicAddress" >
                        <Form.Label className='text-light'>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="Enter Address" onChange={handleChange} value={customer.address}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicCity" >
                        <Form.Label className='text-light'>City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="Enter City" onChange={handleChange} value={customer.city}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicCounty" >
                        <Form.Label className='text-light'>County</Form.Label>
                        <Form.Control type="text" name="county" placeholder="Enter County" onChange={handleChange} value={customer.county}/>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="formBasicZip" >
                        <Form.Label className='text-light'>Zip</Form.Label>
                        <Form.Control type="number" name="zip" placeholder="Enter Zip"  onChange={handleChange} value={customer.zip}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col  md={4}>
                        <Form.Group className="mb-3" controlId="formBasicState" >
                        <Form.Label className='text-light'>State</Form.Label>
                        <Form.Control type="text" name="state" placeholder="Enter State" onChange={handleChange} value={customer.state}/>
                        </Form.Group>
                    </Col>
                    <Col  md={4}>
                        <Form.Group className="mb-3" controlId="formBasicActive" >
                        <Form.Label className='text-light'>Active</Form.Label>
                        <Form.Check // prettier-ignore
                        type="switch"
                        name="active"
                        id="custom-switch"
                        label="Active"
                        onChange={handleChange}
                        checked={customer.active}/>
                        </Form.Group>
                    </Col>
                    <Col md={4}>&nbsp;</Col>
                    <Col  md={4}>&nbsp;</Col>
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
      {/* <Col md="auto"></Col> */}
    </Row>
  </Container>
);
}

