import React, { useEffect, useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./JobDash.css";

const Finance = () => {
  const { state } = useLocation();
  const personality = state.Personality;
  const nav = useNavigate();
  const [options, setOptions] = useState([]);

  function getUserData(e) {
    e.preventDefault();
    var form_data = new FormData(e.target);
    for(var pair of form_data.entries()) {
        var amount = pair[1];
        if (amount >= 1000) {
            var data = {"finance": amount, "personality": personality}
            nav("/studentmain", { state: data });
        }
        else {
            alert("Finance must be greater than 1000");
        }
    }
  }

  return (
    <div>
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="j-title">Finance</h2>
            </div>

            <div className="card-body">
              <form
                method="POST"
                action=""
                id="user_form"
                onSubmit={(e) => getUserData(e)}
              >

                <div className="form-group row">
                  <label className="col-sm-3  col-form-label">
                    Finance per Month
                  </label>
                  <div className="col-sm-9">
                    <input id="finance" type="number" className="form-control" placeholder="Finance" name="finance" required />
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

export default Finance;
