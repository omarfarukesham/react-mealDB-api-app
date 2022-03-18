import React from 'react';

const Header = () => {
    return (
        <div>
           <ul className="nav justify-content-center ">
            <li className="nav-item bg-primary">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item bg-primary mx-3">
                <a className="nav-link text-white" href="#">Shop</a>
            </li>
            <li className="nav-item bg-primary">
                <a className="nav-link text-white" href="#">Offer</a>
            </li>

            </ul>
        </div>
    );
};

export default Header;