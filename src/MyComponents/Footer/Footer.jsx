import { useEffect, useState } from 'react';
import React from 'react';
import './Footer.css'
import { useLocation } from 'react-router-dom';
const Footer = () => {
  const loc = useLocation();
  return (
    <>
     <footer>
        <div class="footer-content">
            {/* <h3 className='f-h3'>Career Coach</h3> */}
            <p className='f-p'>Our goal is to provide a career counseling to Students as well as Job Seekers. "Your Career, Our Guidance".</p>  
            {/* <p className='f-p'>Email: <span className='f-span'>admin@careercoach.com</span></p> */}
        </div>
        <div class="footer-bottom">
            <p className='f-p'>copyright &copy; 2022  All right reserved by <a className='f-a' href="/">CareerCoach</a></p>
        </div>
    </footer>
    </>
  )

}
export default Footer