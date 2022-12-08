import React, {useEffect, useState} from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./JobDash.css";
import { useFormik } from "formik";
const JobAcademicDash = () => {
  
  const nav = useNavigate();

  const data = ()=>{
    if(formik.values.rate === '1'){
      nav('/jobsearch');
    }
    else{
      let obj = {"state": formik.values.rate}
      nav('/jobques', {state: obj})
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
    <div>
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
       <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="j-title">Academics</h2>
            </div>
            <div className="card-body">
              <form method="POST" onSubmit={formik.handleSubmit}>
                <div className="form-group row">
                  <label className="col-sm-3  col-form-label">
                    Choose Your Latest Academics
                  </label>
                  <div className="col-sm-9">
                    <select className="form-select form-control" name="rate" value={formik.values.rate} onChange={formik.handleChange}>
                      <option value="">Choose option</option>
                      <option value="1">BS SE/CS/IT/CE</option>
                      <option value="2">BS Psychology</option>
                      <option value="3">BS Chemistry</option>
                      <option value="4">BS Math</option>
                      <option value="5">BS Physics</option>
                      <option value="6">BS Political Science</option>
                      <option value="7">BS Economics</option>
                    </select>
                  </div>
                </div>
                <center>
                  <button className="btn btn-danger mt-5" type="submit">
                    Discover Yourself!
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default JobAcademicDash;
