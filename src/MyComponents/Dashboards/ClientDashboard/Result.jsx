import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  var jobTitles = [];
  const sent =async() =>{
    var email = localStorage.getItem('email');
    var obj = {'obj': jobTitles, 'email': email, 'finance': 'null', 'academic_id': '9', 'location': 'null', 'familybg': 'null', 'interest': 'null', 'migration': 'null'}
    const dat = await fetch("http://127.0.0.1:5000/jobsave", {
        method: "POST",
        body: JSON.stringify(obj)
      });
      
  }

  if(state !== null){
     console.log(state.interest)
    var final_res = state.final_res;
    var job = state.job0;
    var job_dict = state.job_dict;
    for (const [key, value] of Object.entries(final_res)) {
      jobTitles.push(job_dict[value]);
    }
  }
  else{
    nav('/jobsearch');
  }

  useEffect(() => {
    if(state !== null) {
      sent(); 
    }
  }, []);
  
  
  var widths = ['100%', '95%', '80%', '70%', '50%'];

  return (
    <div className="result-main">
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
      <b>
        <h1>Hey! The top job roles that matched your skills.....</h1>
        <br />
        <br />
      </b>
      <div className="graph-cont">
        <h1>You can be a great:</h1>

        {jobTitles.map(function (title, index) {
          return (
            <div key={index}>
              <div className="bar bar2" style={{ width: widths[index] }}>
                <a href="" style={{textDecoration: 'none'}}>{title}</a>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
