import React, {useState, useEffect} from 'react';
import CustomerIndex from './CustomerIndex';
import CustomerForm from './CustomerForm';
import FormNavigator from '../Controllers/FormNavigator';
//import {CustomersMetadata} from './CustomersMetadata.js';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';


export default function CustomerContainer(){
    const [activeForm, setActiveForm] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState({active: true});
    const [showAlert, setShowAlert] = useState(false);
    const [errorMsg, setErrorMessage] = useState('');

    useEffect(() => {
       // setCustomers(CustomersMetadata());
       LoadDataFromServer();
    },[]);


    function LoadDataFromServer(){
        axios.get('https://192.168.1.18:7186/api/Customers')
        .then(response => {
            const responseData = response.data;
            setCustomers(responseData);
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message);
            setShowAlert(true);
        });
    }

    function AddNewCustomerToServer(data){
        axios.post('https://192.168.1.18:7186/api/Customers', data)
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

    function UpdateCustomerToServer(data){
        axios.put('https://192.168.1.18:7186/api/Customers/' + data.id, data)
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

    function DeleteCustomerFromServer(id){
        axios.delete('https://192.168.1.18:7186/api/Customers/' + id)
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

    function handleEdit({target}){
        const id = Number(target.getAttribute("value"));
        setSelectedCustomer(customers.find(x => x.id === id));
        setActiveForm(1);
    }

    function handleDelete({target}){
        const customerId = Number(target.getAttribute("value"));
        DeleteCustomerFromServer(customerId);
        //setCustomers((customers) => customers.filter((item) => item.id !== customerId))
    }

    function handlePage({target}){
        const pageId = Number(target.getAttribute("valuekey"));
        if(pageId === 1){
            setSelectedCustomer({active: true}); 
        }
        setActiveForm(pageId);
    }

    function handleData(data){
        if(data){
            // setCustomers((prev) => {
            //     const existCust = customers.findIndex(x => x.id === data.id);
            //     if(existCust !== -1){
            //       customers[existCust] = data;
            //       return ([...prev]);
            //     }
            //     else{
            //         const ids = customers.map((a) => a.id)
            //         const highestId = Math.max(...ids);
            //       const newCustomer = data;
            //       newCustomer.id = highestId + 1;
            //       return ([...prev, newCustomer]);
            //     }
            //   });
              const existCust = customers.findIndex(x => x.id === data.id);
              if(existCust !== -1){
                UpdateCustomerToServer(data);
              }
              else{
                AddNewCustomerToServer(data);
              }

              setActiveForm(0);
        }

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
     
    return (<>
        <FormNavigator handlePage={handlePage}/>
        { alert }
        {activeForm === 0 ? <CustomerIndex customers={customers} handleEdit={handleEdit} handleDelete={handleDelete}/> : <CustomerForm selectedCustomer={selectedCustomer || []} sendDataToParent={handleData}/>}

        </>);

    
}