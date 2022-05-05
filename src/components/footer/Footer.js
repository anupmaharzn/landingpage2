import React from 'react';
import { image } from '../../images';
import './footer.scss';
const Footer = () => {
    return (
        <footer>
            <div className='footer-art'>
                <picture>
                    <source media='(max-width:767px)' srcSet={image.footer_mobile} />
                    <img src={image.footer} alt="" />
                </picture>
            </div>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-header'>
                        <div className='logo'>
                            <img src={image.logo} alt="" />

                        </div>
                        <div className='social-media-icons'>
                            <img src={image.fb} alt="" />
                            <img src={image.twitter} alt="" />
                            <img src={image.instagram} alt="" />
                            <img src={image.pintrest} alt="" />
                        </div>
                    </div>
                    <div className='footer-menu'>
                        <div className='our-company'>
                            <h4>Our Company</h4>
                            <ul>
                                <li>How we work</li>
                                <li>Why insure?</li>
                                <li>View plans</li>
                                <li>Reviews</li>
                            </ul>
                        </div>

                        <div className='help'>
                            <h4>Help</h4>
                            <ul>
                                <li>FAQ</li>
                                <li>Terms of use</li>
                                <li>Privacy Policy</li>
                                <li>Cookies</li>
                            </ul>
                        </div>

                        <div className='Contact'>
                            <h4>Contact</h4>
                            <ul>
                                <li>Sales</li>
                                <li>Support</li>
                                <li>Live chat</li>
                            </ul>
                        </div>


                        <div className='Other'>
                            <h4>Others</h4>
                            <ul>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Licenses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;