import React, {useState, useEffect} from 'react';
import CustomerIndex from './CustomerIndex';
import CustomerForm from './CustomerForm';
import FormNavigator from '../Controllers/FormNavigator';
import {CustomersMetadata} from './CustomersMetadata.js';


export default function CustomerContainer(){
    const [activeForm, setActiveForm] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState({});

    useEffect(() => {
        setCustomers(CustomersMetadata());
    },[]);

    function handleEdit({target}){
        const id = Number(target.getAttribute("value"));
        setSelectedCustomer(customers.find(x => x.id === id));
        setActiveForm(1);
    }

    function handleDelete({target}){
        const customerId = Number(target.getAttribute("value"));
        setCustomers((customers) => customers.filter((item) => item.id !== customerId))
    }

    function handlePage({target}){
        const pageId = Number(target.getAttribute("valuekey"));
        if(pageId === 1){
            setSelectedCustomer({}); 
        }
        setActiveForm(pageId);
    }

    function handleData(data){
        if(data){
            setCustomers((prev) => {
                const existCust = customers.findIndex(x => x.id === data.id);
                if(existCust !== -1){
                  customers[existCust] = data;
                  return ([...prev]);
                }
                else{
                    const ids = customers.map((a) => a.id)
                    const highestId = Math.max(...ids);
                  const newCustomer = data;
                  newCustomer.id = highestId + 1;
                  return ([...prev, newCustomer]);
                }
              });
              setActiveForm(0);
        }

    }
    return (<>
        <FormNavigator handlePage={handlePage}/>
        {activeForm === 0 ? <CustomerIndex customers={customers} handleEdit={handleEdit} handleDelete={handleDelete}/> : <CustomerForm selectedCustomer={selectedCustomer} sendDataToParent={handleData}/>}
        </>);

    
}