import React from 'react';
import './Styles.scss';
import aboutImg from '../../assets/about.jpg';
import {ABOUT_TEXT} from '../../constants';

const About = () => {
  return (
    <div className='about_container'>
    <h1>About
    <span> Me</span>
    </h1>

    <div className='about_content'>
        <div className='about_content_item'>
            <div className='about_content_item_data'>
                <img src={aboutImg} alt='about me' />
            </div>
        </div>
        <div className='about_content_text'>
        <div className='about_content_text_item'>
            <p> {ABOUT_TEXT}</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default About
