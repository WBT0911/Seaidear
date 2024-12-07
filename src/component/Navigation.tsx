import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface NavigationType {
    translate : (key : string) => string;
}

const Navigation: React.FC<NavigationType> = ({translate}) => {


    const navItemData =  [
        {
            url : '/products',
            text : translate('products')
        },
        {
            url : '/contact',
            text : translate('contact')
        },
        {
            url : '/feedback',
            text : translate('feedback')
        },
        {
            url : '/faq',
            text : translate('faq')
        },
        {
            url : '/terms',
            text : translate('terms')
        },
        {
            url : '/trustedAdvisor',
            text : translate('trustedAdvisor')
        },
    ];

    const navigationHandle = (index : number) => {

        const items = document.getElementsByClassName('nav-item-active');
        for(let i = 0;  i < items.length; i++){
            items[i].classList.remove('nav-item-active');
        }

        items[index].classList.add('nav-item-active');

    }






    return (
        <Router>
            <div className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="body">
                            {
                                navItemData.map((item, index) => {
                                    return (
                                        <div className="nav-item" key={index} onClick={() => {navigationHandle(index)}}>
                                            <Link to={item.url}>{item.text}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Navigation;