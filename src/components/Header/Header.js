import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div >
            <nav className='header'>
            <h1>Food Valley</h1>
            <div>
                <a href="./foods">Foods</a>
                <a href="./orders">Orders</a>
                <a href="./inventory">Inventory</a>
                <a href="./about">About</a>
            </div>

            </nav>
        </div>
    );
};

export default Header;