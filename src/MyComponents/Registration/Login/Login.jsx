import React, { useState } from 'react';
import {TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import {useFormik } from 'formik';
import  { Navigate, NavLink } from 'react-router-dom';
import './Login.css';

const validationSchema =yup.object({
    email: yup.string().required("Email is required").email("Enter a Valid Email"),
    password: yup.string().required().min(8,"Password Must be 8 Digit Long"),
});
const Login = () => {
    const [d,setd] = useState('')
    const data=async(e)=>{
        
        let dat = {"email": formik.values.email, "password": formik.values.password}
        const da = await fetch('http://127.0.0.1:5000/login',{
            method: 'POST',
            body: JSON.stringify(dat)
        })
        let d = await da.json()
        if (d.name) {
            let jso = {...d, 'success': 'success'}
            setd(jso);
            localStorage.setItem('user_id', d.user_id)
            localStorage.setItem('name', d.name)
            localStorage.setItem('email', d.email)
            localStorage.setItem('password', d.password)
            localStorage.setItem('role', d.role)
            window.location.reload();
        }
        else {
            alert('Incorrect Email or Password!')
        }
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: ()=>{
            data()
        }
    });
    return (
        <div className="container con bg-light mb-5 mt-5 p-3">
            {localStorage.getItem('role') === 'admin' ? <Navigate to="/admindashboard" /> : null}
            {localStorage.getItem('role') === 'user' ? <Navigate to="/user" /> : null}
        <div className="m-4">
            <form onSubmit ={formik.handleSubmit} method="post">
                <TextField
                className="w-100"
                label="Enter Email"
                name="email"
                id="email"
                margin="normal"
                value ={formik.values.email}
                onChange ={formik.handleChange}
                error ={formik.touched.email && Boolean(formik.errors.email)}
                helperText ={formik.touched.email && formik.errors.email}
                />
                <br />
                <TextField
                className="w-100"
                type="password"
                label="Enter Password"
                name="password"
                id="password"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                error ={formik.touched.password && Boolean(formik.errors.password)}
                helperText ={formik.touched.password && formik.errors.password}
                />
                <br />
                <Button type="submit" variant="outlined" className="mt-5 w-100 bg-dark text-light">LOGIN</Button>
            </form>
            <NavLink className="nav-link text-dark mt-3 create" to="/signup">Create a new account?</NavLink>
        </div>
        </div>
    )
}

export default Login