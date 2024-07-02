import React, {useState} from 'react';
import CustomerContainer from './Customers/CustomerContainer';
import Navigation from './Controllers/Navigation';
import Home from './Home/Home'
import NoContent from './NoContent';
import Brands from './Inventory/Brands';
import Colors from './Inventory/Colors';
import Categories from './Inventory/Categories';
import SubCategories from './Inventory/SubCategories';


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
                    activePage = <Colors/>;
                    break;
                    case 'categories':
                        activePage = <Categories/>;
                        break;
                        case 'subCategories':
                            activePage = <SubCategories/>;
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