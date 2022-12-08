import React from 'react';
import './About.css';

const About = () => {
    return(
        <div className='d-flex hei justify-content-center align-items-center ms-5 me-5'>
            <div className='f-left'>
                <h3 className='a-title'>ABOUT US</h3>
                <p className='a-para'>Career Coach is the website which guide students as well as job seeker to make right choices with their career. We will keep your interest in mind and guide you upon that. Our guidance, Your future </p>
                <input type="submit" value="Our Team" className="bg-dark text-light p-2 pe-3 a-btn" />
            </div>
        <div className='f-right'>
            <div className='bg-img'></div>
        </div>
        </div>
    )
}

export default About