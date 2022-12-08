import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Home.css";
import home from "../../Assets/Images/img1.png";
import wave from "../../Assets/Images/wave.svg";
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();



const Home = (props) => {
  useEffect(() => {
    props.changeCount();
    if (props.navigationCount >= 0) {
      props.changeNavigation();
    }
    
  }, [])
        
  return (
    <>
      {props.hasNavigated === false && localStorage.getItem('role') === 'admin' ? <Navigate to="/admindashboard" /> : null}
      {props.hasNavigated === false && localStorage.getItem('role') === 'user' ? <Navigate to="/user" /> : null}
      <div className="h-wrapper">
        <div className="content">
          <div className="text">
            <h2 className="h-title">CAREER COACH</h2>
            <p className="h-info">We provides a system that assists and supports in the decision making process of Students seeking admission into institutions. Our system will help Students to find career based on their interests.</p>
          </div>
          <div className="img">
            <img className="career-icon" src={home} alt="" />
          </div>
        </div>

        <div className="wave">
          <img className="im" src={wave} alt="" />
        </div>

      </div>
      <div>
        <div className="container-fluid co">
          <div className="styling-module--heading">Statistics From Pakistan</div>
          <div className="row ro"><div className="col-md-12">
            <div id="set_container_width">
              <div className="container">
                <div className="figures_main_container">
                  <div className="figures_numbers_container">
                    <div className="figures_number">76%
                      <div className="figures_border">
                      </div><div className="figures_info_599_holder">
                        <div className="figures_info_599">Students drop out of higher education institutions due to lack of counselling</div>
                      </div>
                    </div>
                    <div className="figures_number">82.6%
                      <div className="figures_border"></div>
                      <div className="figures_info_599_holder">
                        <div className="figures_info_599">Students believe there is a need for a career counsellor</div>
                      </div>
                    </div>
                    <div className="figures_number">94.74%
                      <div className="figures_border"></div>
                      <div className="figures_info_599_holder">
                        <div className="figures_info_599">Recruiters believe students pick the wrong subjects due to no quality career advice</div>
                      </div>
                    </div>
                  </div>
                  <div className="figures_info_container">
                    <div className="figures_info pe-2">Students drop out of higher education institutions with lack of career counnselling being a leading cause</div>
                    <div className="figures_info pe-2">Students believe there is a need for a career counsellor</div>
                    <div className="figures_info">Recruiters believe students pick the wrong subjects due to no quality career advice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;