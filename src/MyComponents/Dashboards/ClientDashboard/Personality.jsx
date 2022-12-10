import React, {useEffect, useState} from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./JobDash.css";

const Personality = () => {
  const nav = useNavigate();
  const [options, setOptions] = useState([]);

  const data=async(dat)=>{
    const da = await fetch('http://127.0.0.1:5000/personality',{
        method: 'POST',
        body: JSON.stringify(dat)
    })
    let d = await da.json();
    // console.log(d);
   nav('/finance', {state: d})
}

  function getUserData(e) {
    e.preventDefault();
    var form_data = new FormData(e.target);
    var formData = [];
    
    var isComplete = true;
    for (var pair of form_data.entries()) {
       //console.log(pair);
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
      var email = localStorage.getItem("email");
      var obj = {'obj': formData, 'email': email}
      data(obj);
    }
    
  }

  useEffect(() => {
      var allOptions = [['Introvert_Extrovert','Do you keep yourself away from friends and thier groups?'], ['Introvert_Extrovert','Do you keep yourself reserved and think to yourself rather than discuss with friends and family?'],['Introvert_Extrovert','Do you keep yourself private and keep silence to concentrate on your work?'],['Introvert_Extrovert', 'Do you keep your thought to yourself?'],['Introvert_Extrovert','Do you carefull and thoughfull about things?'],['Sensing_Intuitive','Do you look always for meaning and possibilities for different things?'],['Sensing_Intuitive','Do you finding yourself deep thinking about things'],['Sensing_Intuitive','Do you think differently about things?'],['Sensing_Intuitive','Do you always look to the future, global perspective, “big picture” for things?'],['Sensing_Intuitive','Do you like ideas and think of your own opinion rather than facts?'],['Thinking_Feeling','Do you love a good argument?'],['Thinking_Feeling','Do you often hard and straight forward towords people?'],['Thinking_Feeling','Do tend to criticize the work of others?'],['Thinking_Feeling','Do you easily face the reality?'],['Thinking_Feeling','Do you think for solution of a problem?'],['Judging_Perceiving','Do you like to organize your work and do it in order which you like?'],['Judging_Perceiving','Do you plan for things and make schedule for them?'],['Judging_Perceiving','Do you like to plan ahead for future?'],['Judging_Perceiving','Do you found yourself regulated and structured'],['Judging_Perceiving','Do you control, judge people?']];
      setOptions(allOptions);
  }, []);
  return (
    <div>
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="j-title">Personality Test</h2>
            </div>

            <div className="card-body">
              <form method="POST" action="" id="user_form" onSubmit={e => getUserData(e)} >
                {options.map(function (title, index) {
                  return (
                    <div className="form-group" key={index}>
                        <label>{title[1]}</label>
                      <div className="col-sm-12">
                        <select
                          className="form-select form-control"
                          required=""
                          aria-label="select example"
                          name={title[0]}
                        >
                          <option value="">Choose option</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>  
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

export default Personality;
