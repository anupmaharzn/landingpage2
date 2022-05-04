import React, { useState } from 'react';
import './header.scss';
import { image } from '../../images';
const Header = () => {
    const [Open, setOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!Open);
    }
    return (
        <div>
            <header>

                <nav className='navbar container'>
                    <div className='logo'>
                        <img src={image.logo} alt="logo" />
                    </div>
                    <ul className={Open ? `nav-items active` : `nav-items`}>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Portfolio</li>
                        <li className='btn btn--nav-btn'>View Plans </li>
                    </ul>
                    <div className="hamburger">
                        <img src={image.hamburger} alt="hamburger" onClick={handleClick} />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;