import React from 'react';
import './header.scss';
import { image } from '../../images';
const Header = () => {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <img src={image.logo} alt="logo"></img>
                </div>
            </nav>
        </header>
    )
}

export default Header;