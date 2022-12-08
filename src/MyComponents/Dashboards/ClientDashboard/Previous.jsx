import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Previous = () => {
  const [data, setdata] = useState([]);
  const d = async () => {
    const obj = { obj: localStorage.getItem("email") };
    const url = await fetch("http://127.0.0.1:5000/previous-scores", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    const d = await url.json();
    setdata(d.res);
  };
  useEffect(() => {
    d();
  }, []);
  return (
    <>
      <div className="container mt-5" style={{minHeight: "400px"}}>
        {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}

        <div className="table-responsive">
          {data.length !== 0 ?
            <table className="table table-hover">
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Guided To</th>
                  <th scope="col">Timestamp</th>
                </tr>
              </thead>
              <tbody>

                {data.map((i, e) => (
                  <tr className="table-light">
                    <td key={e}>{e + 1}</td>
                    <td>{i.guided_to}</td>
                    <td>{i.timestamp}</td>

                  </tr>
                ))}

              </tbody>
            </table> : <h2>Record Not Found!</h2>}
        </div>
      </div>
    </>
  );
};

export default Previous;
