import React from 'react';

const Header = () => {
    return (
        <div>
           <ul class="nav justify-content-center ">
            <li class="nav-item bg-primary">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item bg-primary mx-3">
                <a class="nav-link text-white" href="#">Shop</a>
            </li>
            <li class="nav-item bg-primary">
                <a class="nav-link text-white" href="#">Offer</a>
            </li>

            </ul>
        </div>
    );
};

export default Header;