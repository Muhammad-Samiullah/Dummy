import React, { useState, useEffect } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sidebar from "./Sidebar";
import "./Admin.css";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(7, "Name must be 7 digit long").max(32, "Name must be less than 32 characters"),
})



const Admin = () => {
  const [email, setEmail] = useState('');
  const [d, setd] = useState([]);
  const [user, setuser] = useState("");
  const data = async () => {
    const da = await fetch("http://127.0.0.1:5000/admindashboard", {
      method: "POST",
    });
    let dat = await da.json();
    setd(dat.list);
  };
  useEffect(() => {
    data();
  }, []);

  let loc = useLocation();

  const updatecredential = async () => {
    let name = formik.values.name;
    let obj = { 'name': name, 'prevemail': email }
    document.getElementById('exampleModal').style.display = "none";
    document.getElementById('exampleModal').classList.add('fade');
    alert('Credential Updated Updated')

    const da = await fetch("http://127.0.0.1:5000/editbyadmin", {
      method: "POST",
      body: JSON.stringify(obj)
    });

    window.location.reload()



  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      updatecredential()
    }
  });

  const deleteUser = async email => {
    let obj = { 'email': email }
    let hasConfirmed = window.confirm('Are You Sure?');
    if (hasConfirmed) {
      const res = await fetch("http://127.0.0.1:5000/deleteuser", {
        method: "POST",
        body: JSON.stringify(obj)
      });
      console.log(res);
      data();
    }
  }
  const remove = () => {
    document.getElementById('exampleModal').classList.add('fade')
    document.getElementById('exampleModal').style.display = "none"
  }

  const editUser = async email => {
    document.getElementById('exampleModal').classList.remove('fade')
    document.getElementById('exampleModal').style.display = "block"
    setEmail(email)
  }

  const changeRole = async (role, email) => {
    if (role === 'user') {
      role = '1';
    }
    else {
      role = '2';
    }
    let obj = { 'role': role, 'email': email }
    let hasConfirmed = window.confirm('Are You Sure?');
    if (hasConfirmed) {
      const res = await fetch("http://127.0.0.1:5000/changerole", {
        method: "POST",
        body: JSON.stringify(obj)
      });
      console.log(res);
      data();
    }
  }
  return (
    <div>
      <Sidebar />
      <main className="mt-5 pt-3 admin-d">
        <div className="container-fluid">
          <div className="jumbotron bg-dark text-light p-5">
            <h1 className="display-5">Welcome <span className="text-primary">{localStorage.getItem("name").toUpperCase()}</span></h1>
          </div>
          <div className="row mb-3">
            <div className="col-md-12">
              <h4>Admin Dashboard/Users</h4>
            </div>
          </div>
          {d.length !== 0 ?
            <table className="table table-hover">
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {d.map((e, i) =>
                  e.map((t, p) => (
                    <tr className="table-light">
                      <td key={p}>{p + 1}</td>

                      <td>{t.name}</td>
                      <td>{t.email}</td>
                      <td>{t.role}</td>
                      <td>
                        <button className="btn btn-primary" onClick={() => changeRole(t.role, t.email)}>
                          Change Role
                        </button>
                        <button onClick={() => deleteUser(t.email)} className="ms-md-2 btn btn-danger">
                          Delete
                        </button>
                        <button onClick={() => editUser(t.email)} className="ms-md-2 btn btn-success">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            : <h2 style={{minHeight: "90vh"}}>No Result Found!</h2>}
        </div>
      </main>


      <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-bs-labelledby="exampleModalLabel" aria-bs-hidden="true">
        <div class="modal-dialog mid" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
              <button type="button" id="examplemodalclose" class="close" data-bs-dismiss="modal" aria-bs-label="close" onClick={remove}>
                <span aria-bs-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  id="name"
                  name="name"
                  label="Edit Name"
                  className="w-100"
                  margin="normal"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <br />
                
                <Button type="submit" variant="outlined" className="mt-5 w-100 bg-dark text-light">Update User Profile</Button>
              </form>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Admin;
