import React, {useEffect, useState} from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./JobDash.css";

const JobQuesDash = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const states = state.state;
  const [options, setOptions] = useState([]);

  const data=async(dat)=>{
    const da = await fetch('http://127.0.0.1:5000/user_data',{
        method: 'POST',
        body: JSON.stringify(dat)
    })
    let d = await da.json();
    
    let data = {"results": d}
    
    nav('/studentresult', {state: data})
}

  function getUserData(e) {
    e.preventDefault();
    var form_data = new FormData(e.target);
    var formData = [];
    
    var isComplete = true;
    for (var pair of form_data.entries()) {
      console.log(pair);
      formData.push(pair);
      if (pair[1] === '') {
        isComplete = false;
        document.querySelectorAll('select').forEach(select => {
          console.log(select.value)
          if (select.value == '') {
            select.style.borderColor = 'red';
          }else {
            select.style.borderColor = '#CED4DA';
          }
        })
      }
    }

    if (isComplete) {
      var priorities = [];
      var finances = [];
      options.forEach(option => {
        priorities.push(option[2]);
        finances.push(option[3]);
      })
      var email = localStorage.getItem("email");
      var obj = {'obj': formData, 'email': email, 'academic_id': states, 'priorities': priorities, 'finances': finances, 'finance': '1'}
      console.log(obj);
      data(obj);
    }
    
  }

  useEffect(() => {
    if (states === '2') {
      var allOptions = [['Option_Psychiatrist', 'Do you love to Study human behavior?', 1, 0], ['Option_Teacher', 'Do you love to teach students?', 1, 0], ['Option_Social_Service_Specialists', 'Do you love to provide human social services?', 1, 0]];
      setOptions(allOptions);
    }
    else if (states === '3') {
        var allOptions = [['Option_Chemist', 'Do you love to study atoms and molecules?', 1, 0], ['Option_Chemistry_Teacher', 'Do you love to teach students?', 2, 0], ['Option_Pharmocologist', 'Do you love to study Drugs and other pharmaceutical drugs?', 3, 0]];
        setOptions(allOptions);
    }
    else if (states === '4') {
        var allOptions = [['Option_Mathematician', 'Do you love to apply mathematical theory and techniques to solve practical problems?', 1, 0], ['Option_Maths_Teacher', 'Do you love to teach students', 1, 0], ['Option_Data_Scientist', 'Do you love to compute and apply mathematical operations on data?', 1, 0]];
        setOptions(allOptions);
    }
    else if (states === '5') {
        var allOptions = [['Option_Physicist', 'Do you love to study properties and laws that govern space, time, energy, and matter?', 1, 0], ['Option_Physics_Teacher', 'Do you love to teach students?', 1, 0], ['Option_Data_Analyst', 'Do you love to study data to identify key insights?', 1, 0]];
        setOptions(allOptions);
    }
    else if (states === '6') {
        var allOptions = [['Option_Attorney', 'Do you love to study law?', 1, 0], ['Option_Pol_Science_Teacher', 'Do you love to teach students?', 1, 0], ['Option_Political_Advisors', 'Do you love to study Politics?', 1, 0]];
        setOptions(allOptions);
    }
    else if (states === '7') {
        var allOptions = [['Option_Economist', 'Do you love to study data about economy?', 1, 0], ['Option_Economics_Teacher', 'Do you love to teach students?', 1, 0], ['Option_Banker', 'Do you have interest in banking?', 1, 0]];
        setOptions(allOptions);
    }
  }, []);
  return (
    <div>
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="j-title">INTEREST TEST</h2>
            </div>

            <div className="card-body">
              <form method="POST" action="" id="user_form" onSubmit={e => getUserData(e)}>
                <div className="form-group row" style={{display: 'none'}}>
                  <label className="col-sm-3  col-form-label">
                    Location
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Location" name="location" value="Lahore" />
                  </div>
                </div>
                <div className="form-group row" style={{display: 'none'}}>
                  <label className="col-sm-3  col-form-label">
                    Family Background
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-select form-control"
                      required=""
                      aria-label="select example"
                      name="family_bg"
                    >
                      <option value="">Choose option</option>
                      <option value="1" selected="selected">Strong</option>
                      <option value="2">Not Strong</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row" style={{display: 'none'}}>
                  <label className="col-sm-3  col-form-label">
                    Available to Migrate?
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-select form-control"
                      required=""
                      aria-label="select example"
                      name="migration"
                    >
                      <option value="">Choose option</option>
                      <option value="1" selected="selected">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </div>
                </div>

                {options.map(function (title, index) {
                  return (
                    <div className="form-group" id="red">
                      <label className="bold col-form-label">
                        {title[1]}
                      </label>
                      <div className="col-sm-12">
                        <select
                          className="form-select form-control"
                          required=""
                          aria-label="select example"
                          name={title[0]}
                        >
                          <option value="">Choose option</option>
                          <option value="1">Strongly Disagree</option>
                          <option value="2">Disagree</option>
                          <option value="3">Neutral</option>
                          <option value="4">Agree</option>
                          <option value="5">Strongly Agree</option>
                        </select>
                      </div>
                    </div>
                  );
                })}


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

export default JobQuesDash;
