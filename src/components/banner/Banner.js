import React from 'react'
import { image } from '../../images';

import './banner.scss';
const Banner = () => {
    return (
        <div>
            <div className="banner container">
                <picture>
                    <source media="(max-width:767px)" srcSet={image.works_mobile} />
                    <img src={image.works_desktop} alt="" />
                </picture>
                <div className='banner__wrapper'>
                    <div className='title'>
                        <h2 className='title1'>
                            Find Out More <br /> About Our Work
                        </h2>
                    </div>
                    <div className='button'>
                        <button className='btn'>How We Work</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;