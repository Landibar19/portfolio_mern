import React from 'react';
import './Styles.scss';
import { HERO_CONTENT } from '../../constants';
import profilePic from '../../assets/kevinRushProfile.png';

const Hero = () => {

  return (
    <div className='hero_container'>
        <div className='hero_items'>
            <div className="hero_item">
                <div className="hero_item_data">
                    <h1>
                    Kevin Rush
                    </h1>
                    <span>
                    Full Stack Developer
                    </span>
                    <p>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className='hero_item-image'>
                <div className='hero_item-image_container'>
                <img src={profilePic} alt='Kevin Rush' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
