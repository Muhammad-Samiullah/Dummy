import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "./Result.css";

const StudentResult = () => {
  const { state } = useLocation();
  const results= state.results.Result;

  var message = ""
  if (results.length == 0) {
    message = "No Careers according to your Finance. Kindly increase your finance!";
  } 

  var widths = ['100%', '95%', '80%', '70%', '50%'];

  return (
    <div className="result-main">
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
      <b>
        <h1>Bases on your Personality and Interests her are the top careers for you.....</h1>
        <br/>
        <br />
        <br />
      </b>
      <div className="graph-cont">
        <h1>You can Choose:</h1>

        {results.map(function (title, index) {
          return (
            <div key={index}>
              <div className="bar bar2" style={{ width: widths[index] }}>
                <a href="" style={{textDecoration: 'none'}}>{title}</a>
              </div>
              <br />
            </div>
          );
        })}
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default StudentResult;
