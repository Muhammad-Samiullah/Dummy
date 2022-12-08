import React, {useEffect, useState} from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./JobDash.css";
import { useFormik } from "formik";
const UserDash = () => {
  const { state } = useLocation();
  const finance = state.finance
  const personality = state.personality;
  const nav = useNavigate();
  const data = ()=>{
    if(formik.values.rate === '9'){
      nav('/jobsearch');
    }
    else{
      let obj = {"state": formik.values.rate, "finance": finance, "personality": personality}
      nav('/studentdashboard', {state: obj})
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
                    Choose Your Academics
                  </label>
                  <div className="col-sm-9">
                    <select className="form-select form-control" name="rate" value={formik.values.rate} onChange={formik.handleChange}>
                      <option value="">Choose option</option>
                      <option value="10">8th</option>
                      <option value="1">Matric - Biology</option>
                      <option value="2">Matric - Computer Science</option>
                      <option value="3">Matric - Arts</option>
                      <option value="11">O Level</option>
                      <option value="4">FSc Pre Medical</option>
                      <option value="5">FSc Pre Engineering</option>
                      <option value="6">ICS</option>
                      <option value="7">FA</option>
                      <option value="8">ICom</option>
                      <option value="12">A Level</option>
                      <option value="13">DAE Electrical Technology</option>
                      <option value="14">DAE Mechanical Technology</option>
                      <option value="15">DAE Civil Technology</option>
                      <option value="16">DAE Computer Technology</option>
                      <option value="17">DAE Chemical Technology</option>
                      {/* <option value="9">BSIT</option> */}
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

export default UserDash;
