import React, {useState} from 'react';
import CustomerContainer from './Customers/CustomerContainer';
import Navigation from './Controllers/Navigation';
import Home from './Home/Home'



export default function MainContainer(){
    const [activePageId, setActivePageId] = useState('home');

    const handlePageTransition = (e) => {
        const targetPage = e.target.getAttribute("valuekey");
        console.log(targetPage);
        setActivePageId(targetPage);
    }

    let activePage;

    switch(activePageId){
        case 'home':
            activePage = <Home/>;
            break;
        case 'customers':
            activePage = <CustomerContainer />;
            break;
        default:
            activePage = <Home/>;
    }

    return(
<>
    <Navigation activePage={activePageId} handlePageTransition={handlePageTransition}/>
    {activePage}
</>
    );
}