import React, { useState, useEffect } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import "./Admin.css";
import Sidebar from './Sidebar';

const ResultDash = () => {
  const [d, setd] = useState([]);

  const data = async () => {
    const da = await fetch("http://127.0.0.1:5000/resultdashboard", {
      method: "POST",
    });
    let dat = await da.json();
    setd(dat.list);
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      < Sidebar />
      <main style={{minHeight: '100vh' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4>Admin Dashboard/Results</h4>
            </div>
          </div>
          <table className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Finance</th>
                <th scope="col">Academics</th>
                <th scope="col">Family Bg</th>
                <th scope="col">Location</th>
                <th scope="col">Migration</th>
                <th scope="col">Timestamp</th>
                <th scope="col">Guided To</th>
              </tr>
            </thead>
            <tbody>
              {d.map((e, i) =>
                e.map((t, p) => (
                  <tr key={p}>
                    <td key={p}>{p+1}</td>
                    <td>{t.email}</td>
                    <td>{t.finance}</td>
                    <td>{t.academic}</td>
                    <td>{t.familybg}</td>
                    <td>{t.location}</td>
                    <td>{t.migration}</td>
                    <td>{t.timestamp}</td>
                    <td>{t.guided_to}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ResultDash;
