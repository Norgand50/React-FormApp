import React, {useState} from 'react';
import CustomerContainer from './Customers/CustomerContainer';
import Navigation from './Controllers/Navigation';
import Home from './Home/Home'
import NoContent from './NoContent';
import Brands from './Inventory/Brands';


export default function MainContainer(){
    const [activePageId, setActivePageId] = useState('home');

    const handlePageTransition = (e) => {
        const targetPage = e.target.getAttribute("valuekey");
        //console.log(targetPage);
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
        case 'products':
            activePage = <NoContent/>;
            break;
            case 'brands':
                activePage = <Brands/>;
                break;
                case 'colors':
                    activePage = <NoContent/>;
                    break;
                    case 'categories':
                        activePage = <NoContent/>;
                        break;
                        case 'subCategories':
                            activePage = <NoContent/>;
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