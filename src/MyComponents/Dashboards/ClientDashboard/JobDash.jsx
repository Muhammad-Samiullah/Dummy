import React from 'react';
import './JobDash.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import Result from './Result';
import {useNavigate, Navigate} from 'react-router-dom';
import Loader from '../../Assets/Images/loading-icon.gif'

const JobDash = () => {
    const nav = useNavigate();
    const data = async()=>{
        document.querySelector('.loading-icon-div').style.display = 'block';
        var obj = {obj: [[formik.values.rate_Database_Fundamentals, formik.values.rate_Computer_Architecture, formik.values.rate_Distributed_Computing_Systems, formik.values.rate_Cyber_Security, formik.values.rate_Networking, formik.values.rate_Development, formik.values.rate_Programming_Skills, formik.values.rate_Project_Management, formik.values.rate_AI_ML, formik.values.rate_Technical_Communication, formik.values.rate_Computer_Forensics_Fundamentals, formik.values.rate_se, formik.values.rate_Business_Analysis,formik.values.rate_Communication_skills, formik.values.rate_Data_Science, formik.values.rate_Troubleshooting_skills, formik.values.rate]]}
        const dat = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            body: JSON.stringify(obj)
        });
        const d = await dat.json()
        console.log(d);
        nav('/result', {state: d})
    }

    const formik = useFormik({
        initialValues : {
        rate_Database_Fundamentals : "",
        rate_Computer_Architecture: "",
        rate_Distributed_Computing_Systems: "",
        rate_Cyber_Security:"",
        rate_Networking: "",
        rate_Development: "",
        rate_Programming_Skills: "",
        rate_Project_Management: "",
        rate_AI_ML: "",
        rate_Technical_Communication: "",
        rate_Computer_Forensics_Fundamentals: "",
        rate_se: "",
        rate_Business_Analysis: "",
        rate_Communication_skills: "",
        rate_Data_Science: "",
        rate_Troubleshooting_skills: "",
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
                            <h2 className="j-title">INTEREST TEST</h2>
                        </div>

                        <div className="card-body">
                            <form method="POST" onSubmit={formik.handleSubmit}>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Database Fundamentals
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Database_Fundamentals"
                                            value={formik.values.rate_Database_Fundamentals}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Computer Architecture
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Computer_Architecture"
                                            value={formik.values.rate_Computer_Architecture}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Distributed Computing Systems
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Distributed_Computing_Systems"
                                            value={formik.values.rate_Distributed_Computing_Systems}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">Cyber Security</label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Cyber_Security"
                                            value={formik.values.rate_Cyber_Security}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Computer Networking
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Networking"
                                            value={formik.values.rate_Networking}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Software Development
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Development"
                                            value={formik.values.rate_Development}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Programming Skills
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Programming_Skills"
                                            value={formik.values.rate_Programming_Skills}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Project Management
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Project_Management"
                                            value={formik.values.rate_Project_Management}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Computer Forensics Fundamentals
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Computer_Forensics_Fundamentals"
                                            value={formik.values.rate_Computer_Forensics_Fundamentals}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Technical Communication skills
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Technical_Communication"
                                            value={formik.values.rate_Technical_Communication}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">AI ML</label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_AI_ML"
                                            value={formik.values.rate_AI_ML}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Software Engineering
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_se"
                                            value={formik.values.rate_se}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Business Analysis
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Business_Analysis"
                                            value={formik.values.rate_Business_Analysis}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">
                                                Choose option
                                            </option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Communication skills
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Communication_skills"
                                            value={formik.values.rate_Communication_skills}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Data Science</label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-select form-control"
                                            required=""
                                            aria-label="select example"
                                            name="rate_Data_Science"
                                            value={formik.values.rate_Data_Science}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Troubleshooting skills
                                    </label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control form-select"
                                            name="rate_Troubleshooting_skills"
                                            value={formik.values.rate_Troubleshooting_skills}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3  col-form-label">
                                        Graphics Designing
                                    </label>
                                    <div className="col-sm-9">
                                        <select className="form-control form-select" name="rate" value={formik.values.rate}
                                            onChange={formik.handleChange}>
                                            <option value="">Choose option</option>
                                            <option value="1">Not Interested</option>
                                            <option value="2">Poor</option>
                                            <option value="3">Beginner</option>
                                            <option value="5">Average</option>
                                            <option value="6">Intermediate</option>
                                            <option value="7">Excellent</option>
                                            <option value="9">Professional</option>
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
            <div className='loading-icon-div'>
                <img src={Loader} />
            </div>
        </div>
    )
}

export default JobDash
