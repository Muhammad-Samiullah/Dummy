import React, {useEffect, useState} from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./JobDash.css";

const JobDash = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const states = state.state;
  const [options, setOptions] = useState([]);
  const finance = state.finance
  const personality = state.personality;

  const data=async(dat)=>{
    const da = await fetch('http://127.0.0.1:5000/user_data',{
        method: 'POST',
        body: JSON.stringify(dat)
    })
    let d = await da.json();
    console.log(d);
    let data = {"results": d, "personality": personality}
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
        alert('Select All Options');
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
      var obj = {'obj': formData, 'email': email, 'academic_id': states, 'priorities': priorities, 'finances': finances, "finance": finance}
      console.log(obj);
      data(obj);
    }
    
  }

  useEffect(() => {
    if (states === '10') {
      var allOptions = [['Option_Matric_Biology&Option_O_Level_Medical', 'Do you love to Study life and living Organisms?', 1, 2500], ['Option_Matric_Computer_Science&Option_O_Level_Engineering', 'Do you like to study the design, development and analysis of Software and Computer Hardware?', 2, 2500], ['Option_O_Level_Computer_Science', 'Do you love to study Computer and Management?', 2, 2500], ['Option_O_Level_Business', 'Do you love to study Accounting and Economy?', 3, 10000], ['Option_Matric_Arts&Option_O_Level_Arts', 'Do you get inspirations from inspiration from history, language, cultures, societal norms, philosophy, visual arts, music', 4, 2500]];
      setOptions(allOptions);
    }
    else if (states === '1') {
      var allOptions = [['Option_FSc_Pre_Medical', 'Do you love to Study living organisms?', 1, 4200], ['Option_FSc_Pre_Engineering', 'Do you love study in engineering and mechanisms?', 2, 4200], ['Option_ICS', 'Do you love to study technology and its innovations?', 3, 3900], ['Option_ICOM', 'Do you love to study business and its concepts?', 4, 3700], ['Option_FA', 'Do you love study literature?', 5, 3500], ['Option_FA', 'Do you love study geography?', 5, 3500], ['Option_FA', 'Do you love study arts?', 5, 3500], ['Option_FA', 'Do you love study different languages', 5, 3500], ['Option_DAE_Electrical_Technology', 'Do you have interest in electricity, electronics, and electromagnetism?', 6, 4200], ['Option_DAE_Civil_Technology', 'Do you have interest in planning, construction and maintenance of human-made structures such as buildings?', 6, 4200], ['Option_DAE_Mechanical_Technology', 'Do you love study of machinery, its manufacturing and its maintenance?', 6, 4200], ['Option_DAE_Computer_Science_Technology', 'Do you have interest in Computer Software Development?', 6, 4200], ['Option_DAE_Chemical_Technology', 'Do you love to study scientific properties of elements?', 6, 4200]];
      setOptions(allOptions);
    }
    else if (states === '2') {
      var allOptions = [['Option_ICS', 'Do you love to study technology and its innovations?', 3, 2000], ['Option_ICOM', 'Do you love to study business and its concepts?', 4, 2000], ['Option_FA', 'Do you love study literature?', 5, 2000], ['Option_FA', 'Do you love study geography?', 5, 2000], ['Option_FA', 'Do you love study arts?', 5, 2000], ['Option_FA', 'Do you love study different languages', 5, 2000]];
      setOptions(allOptions);
    }
    else if (states === '3') {
      var allOptions = [['Option_ICOM', 'Do you love to study business and its concepts?', 1, 2000], ['Option_FA', 'Do you love study literature?', 2, 2000], ['Option_FA', 'Do you love study geography?', 2, 2000], ['Option_FA', 'Do you love study arts?', 2, 2000], ['Option_FA', 'Do you love study different languages', 2, 2000]];
      setOptions(allOptions);
    }
    else if (states === '4') {
      var allOptions = [['Option_MBBS', 'Do you love to study Human Anatomy and Genetics?', 1, 12000], ['Option_Pharm_D', 'Do you love to study Medicine?', 2, 10000], ['Option_Bachelor_of_Dental_Surgery', 'Do you love to study oral and dental diagnosis?', 2, 11000], ['Option_Doctor_of_Veterinary_Medicine', 'Do you love to study Animal Anatomy and Diagnosis?', 3, 8000], ['Option_Optometry', 'Do you love to study Eye Diseases and its Diagnosis?', 4, 6400], ['Option_Psychology', 'Do you love to study Human and Animal Behavior and Emotions?', 4, 11300], ['Option_Gynaecology', 'Do you love to study womens diseases, especially those of the reproductive organs?', 3, 13000], ['Option_BS_Zoology', 'Do you love to study animals and their anatomy both living and extinct?', 5, 8300], ['Option_BS_Botany', 'Do you love to study plants and how they function?', 5, 8300]];
      setOptions(allOptions);
    }
    else if (states === '5') {
      var allOptions = [['Option_Electrical_Engineering', 'Do you have interest in electricity, electronics, and electromagnetism?', 1, 6500], ['Option_Mechanical_Engineering&Industrial_and_Manufacturing_Engineering&Mechatronics_Engineering', 'Do you love study of machinery, its manufacturing and its maintenance?', 1, 6500], ['Option_Civil_Engineering&Transportation_Engineering&Environmental_Engineering', 'Do you have interest in planning, construction and maintenance of human-made structures such as buildings?', 1, 6500], ['Option_Chemical_Engineering&Metallurgical_Engineering&Polymer_Engineering', 'Do you love to study scientific properties of elements?', 2, 6500], ['Option_Mining_Engineering&Geological_Engineering&Petroleum_and_Gas_Engineering', 'Do you love to study Earth and its Atmosphere?', 3, 6500], ['Option_Architecture_Engineering&City_and_Regional_Planning&Product_and_Industrial_Design', 'Do you love to study design of human-made structures?', 4, 6500], ['Option_BS_Mathematics', 'Do you love to study algebra, calculus, functional analysis, geometry, number theory, logic and topology?', 5, 2000], ['Option_BS_Physics', 'Do you love to study electricity, magnetism and quantum physics?', 5, 2000], ['Option_BS_Chemistry', 'Do you love to study inorganic, organic, and physical chemistry?', 5, 2000], ['Option_BSSE', 'Do you have interest in Computer Software Development?', 6, 4000], ['Option_BSCS', 'Do you have interest in Computer Hardware and Logic Building?', 6, 4200], ['Option_BSIT', 'Do you have interest in Networking?', 6, 4000]];
      setOptions(allOptions);
    }
    else if (states === '6') {
      var allOptions = [['Option_BSSE', 'Do you have interest in Computer Software Development?', 1, 4000], ['Option_BSCS', 'Do you have interest in Computer Hardware and Logic Building?', 2, 4000], ['Option_BSIT', 'Do you have interest in Networking?', 3, 4000], ['Option_Computer_Engineering', 'Do you have interest in Computer Hardware and its working?', 4, 4000]];
      setOptions(allOptions);
    }
    else if (states === '7') {
      var allOptions = [['Option_BA', 'Do you love to study Humanities, Arts, Social Sciences, Linguistics, Cultural Sciences', 1, 4000], ['Option_B_Ed.', 'Do you have interest in teaching?', 2, 4000], ['Option_LLB', 'Do you love to study Law, Constitution and Civil Liberties?', 2, 4000], ['Option_BBA', 'Do you love to study marketing, accounting and human resources management?', 3, 4000], ['Option_BS_English', 'Do you have interest in English Language and its Literature?', 5, 4000], ['Option_BS_Urdu', 'Do you love to study Urdu language and literature?', 5, 4000], ['Option_BS_Pakistan_Studies', 'Do you love to study history, geography and economics in relation to Pakistan?', 4, 4000], ['Option_BS_Sociology', 'Do you have interest in human social relationships and institutions?', 4, 4000], ['Option_BS_Political_Science', 'Do you love to study democracy, systems of government and political behavior?', 4, 4000], ['Option_BS_Islamic Studies', 'Do you love to study Islamic History, Islamic Thought, Seerah, Islamic Culture and Islamic Civilization?', 5, 4000]];
      setOptions(allOptions);
    }
    else if (states === '8') {
      var allOptions = [['Option_CA', 'Do you love to study accountancy and auditing?', 1, 4000], ['Option_BCOM', 'Do you love study Business and Managing Skills?', 1, 4000], ['Option_BBA', 'Do you love to study marketing, accounting and human resources management?', 3, 4000], ['Option_BS_Accounting_and_Finance', 'Do you love to study financial system, institutions, and financial instruments, which are involved with the transfer of funds between individuals and businesses?', 2, 4000], ['Option_BS_Public_Administration', 'Do you love to study public policy, organizational development, ethical behavior and human resources?', 2, 4000], ['Option_BS_Economics_and_Management', 'Do you love to study economy and organizations function?', 3, 4000]];
      setOptions(allOptions);
    }
    else if (states === '11') {
      var allOptions = [['Option_A_Level_Engineering&FSc_Pre_Engineering', 'Do you love study in engineering and mechanisms?', 2, 4200], ['Option_A_Level_Medical&FSc_Pre_Medical', 'Do you love to Study living organisms?', 1, 4200], ['Option_A_Level_Business', 'Do you love to study Accounting and Economy?', 3, 4200], ['Option_ICS', 'Do you love to study technology and its innovations?', 3, 3900], ['Option_ICOM', 'Do you love to study business and its concepts?', 4, 3700], ['Option_FA', 'Do you love study literature?', 5, 3500], ['Option_FA', 'Do you love study geography?', 5, 3500], ['Option_FA', 'Do you love study arts?', 5, 3500], ['Option_FA', 'Do you love study different languages', 5, 3500], ['Option_DAE_Electrical_Technology', 'Do you have interest in electricity, electronics, and electromagnetism?', 6, 4200], ['Option_DAE_Civil_Technology', 'Do you have interest in planning, construction and maintenance of human-made structures such as buildings?', 6, 4200], ['Option_DAE_Mechanical_Technology', 'Do you love study of machinery, its manufacturing and its maintenance?', 6, 4200], ['Option_DAE_Computer_Science_Technology', 'Do you have interest in Computer Software Development?', 6, 4200], ['Option_DAE_Chemical_Technology', 'Do you love to study scientific properties of elements?', 6, 4200]];
      setOptions(allOptions);
    }
    else if (states === '12') {
      var allOptions = [['Option_Electrical_Engineering', 'Do you have interest in electricity, electronics, and electromagnetism?', 1, 10000],  ['Option_Mechanical_Engineering&Industrial_and_Manufacturing_Engineering&Mechatronics_Engineering', 'Do you love study of machinery, its manufacturing and its maintenance?', 1, 10000], ['Option_Civil_Engineering&Transportation_Engineering&Environmental_Engineering', 'Do you have interest in planning, construction and maintenance of human-made structures such as buildings?', 1, 10000], ['Option_Chemical_Engineering&Metallurgical_Engineering&Polymer_Engineering', 'Do you love to study scientific properties of elements?', 2, 10000], ['Option_Mining_Engineering&Geological_Engineering&Petroleum_and_Gas_Engineering', 'Do you love to study Earth and its Atmosphere?', 3, 10000], ['Option_Architecture_Engineering&City_and_Regional_Planning&Product_and_Industrial_Design', 'Do you love to study design of human-made structures?', 4, 10000], ['Option_BS_Mathematics', 'Do you love to study algebra, calculus, functional analysis, geometry, number theory, logic and topology?', 5, 5000], ['Option_BS_Physics', 'Do you love to study electricity, magnetism and quantum physics?', 5, 5000], ['Option_BS_Chemistry', 'Do you love to study inorganic, organic, and physical chemistry?', 5, 5000], ['Option_BSSE', 'Do you have interest in Computer Software Development?', 6, 5000], ['Option_BSCS', 'Do you have interest in Computer Hardware and Logic Building?', 6, 5000], ['Option_BSIT', 'Do you have interest in Networking?', 6, 5000], ['Option_CA', 'Do you love to study accountancy and auditing?', 1, 4000]]
      setOptions(allOptions);
    }
    else if (states === '13') {
      var allOptions = [['Option_B.Tech_Electrical_Engineering', 'Do you love to study electricity and its fundamentals?', 1, 4000], ['Option_B.Tech_Mechatronics_Engineering', 'Do you love study of machinery, its manufacturing and its maintenance?', 2, 4000], ['Option_B.Tech_Software_Engineering', 'Do you have interest in Computer Software Development?', 3, 4000], ['Option_B.Tech_Environmental_Engineering', 'Do you have interest in planning, construction and maintenance of human-made structures?', 4, 4000]];
      setOptions(allOptions);
    }
    else if (states === '14') {
      var allOptions = [['Option_B.Tech_Mechanical_Engineering&B.Tech_Mechatronics_Engineering', 'Do you love study of machinery, its manufacturing and its maintenance?', 1, 4000], ['Option_B.Tech_Environmental_Engineering', 'Do you have interest in planning, construction and maintenance of human-made structures?', 2, 4000], ['Option_B.Tech_Aerospace_Engineering', 'Do you have interest in development of Aircraft and Spacecraft?', 3, 4000]];
      setOptions(allOptions);
    }
    else if (states === '15') {
      var allOptions = [['Option_B.Tech_Civil_Engineering&B.Tech_Environmental_Engineering', 'Do you have interest in planning, construction and maintenance of human-made structures?', 1, 4000], ['Option_B.Tech_Geo_Informatics_Engineering', 'Do you have interest in collecting or gathering information about an object in geographic space?', 2, 4000]];
      setOptions(allOptions);
    }
    else if (states === '16') {
      var allOptions = [['Option_B.Tech_Software_Engineering', 'Do you have interest in development of computer softwares?', 1, 4000], ['Option_B.Tech_Aionics_Engineering', 'Do you have interest in softwares used in aviation?', 2, 4000]];
      setOptions(allOptions);
    }
    else if (states === '17') {
      var allOptions = [['Option_B.Tech_Chemical_Engineering', 'Do you love to study scientific properties of elements?', 1, 4000], ['Option_B.Tech_Environmental_Engineering', 'Do you have interest in planning, construction and maintenance of human-made structures?', 2, 4000]];
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
                <div className="form-group row">
                  <label className="col-sm-3  col-form-label">
                    Location
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Location" name="location" />
                  </div>
                </div>
                <div className="form-group row">
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
                      <option value="1">Strong</option>
                      <option value="2">Not Strong</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
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
                      <option value="1">Yes</option>
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

export default JobDash;
