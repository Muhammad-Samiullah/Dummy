import React, {useEffect, useState} from "react";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import "./Mainpg.css";
import { useFormik } from "formik";
import StudentPic from '../../Assets/Images/student.png';
import JobPic from '../../Assets/Images/job.png';
const Mainpg = () => {
  const nav = useNavigate();
  const data = ()=>{
    if(formik.values.rate === '9'){
      nav('/jobsearch');
    }
    else{
      nav('/studentdashboard', {state: formik.values.rate})
    }
  }
  const formik = useFormik({
    initialValues: {
      rate: ""
    },
    onSubmit: () =>{
      data()
  }
  });
  return (
    <>
    <div className="main">
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
            <div className='d-flex justify-content-center align-items-center m-5 checkflex'>
            <div className='m-left d-flex justify-content-center px-5 border me-md-4 bg-main'>
                
                <form method="POST" onSubmit={formik.handleSubmit}>
                <div className="form-group row d-flex justify-content-center">
                <h1 className="text-align-center">Student</h1>
                  <img src={StudentPic} style={{height: '300px', maxWidth: '200px'}} />
                </div>

                {/* <p>This will lead you to the student dashboard where you can choose acadmic for which guidance is given. This</p> */}
                <p>A Student Module that evaluates you based on multiple factors and guides you to the best path possible in order to ensure a better and bright future.</p>
               
                  <NavLink  to="/personality" className="btn btn-danger mt-5 mb-5" type="submit">
                    Discover Yourself!
                  </NavLink>
              </form>
            </div>
        <div className='m-right d-flex justify-content-center px-5 border bg-main'>
        <form method="POST" onSubmit={formik.handleSubmit}>
                <div className="form-group row d-flex justify-content-center">
                <h1 className="text-align-center">Job</h1>
                  <img src={JobPic} style={{height: '300px', maxWidth: '500px'}} />
                </div>
                <p>A Job Module empowered with AI/ML that evaluates a SE/CS/IT graduate based on multiple factors and outputs the best career options possible.</p>
               
                  <NavLink to="/jobmain" className="btn btn-danger mt-5 mb-5" type="submit">
                    Discover Yourself!
                  </NavLink>
              </form>
        </div>
        </div>
        </div>


    </>
         
  );
};

export default Mainpg;
