import React from 'react';
import CustomerContainer from './Customers/CustomerContainer';
import Navigation from './Controllers/Navigation';


export default function MainContainer(){
    return(
<>
<Navigation/>
<CustomerContainer/>
</>
    );
}