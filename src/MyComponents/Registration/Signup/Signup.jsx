import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  { Navigate, NavLink } from 'react-router-dom';
import './Signup.css';

import {useFormik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required").matches(/^[A-Za-z ]*$/, 'Please enter valid First name').min(3, "First Name must be 3 digit long").max(32, "First Name must be less than 32 characters"),
    lastName: yup.string().required("Last Name is required").matches(/^[A-Za-z ]*$/, 'Please enter valid Last name').min(3, "Last Name must be 3 digit long").max(32, "Last Name must be less than 32 characters"),
    email: yup.string().email("Enter a Valid Email").required("Email is required"),
    password:yup.string().required("Password is required").min(8,"Password Must be 8 Digit Long"),
    confirmePassword:yup.string().required("Confirm Password is required").min(8,"Password Must be 8 Digit Long")
    .oneOf([yup.ref('password'), null], "Password Must Match")
    
})
const Signup = () => {
    const [d, setD] = useState('')
    const data=async()=>{
        let name = formik.values.firstName + ' ' + formik.values.lastName
        let dat = {"name": name, "email": formik.values.email, "password": formik.values.password}
        const da = await fetch('http://127.0.0.1:5000/signup',{
            method: 'POST',
            body: JSON.stringify(dat)
        })
        // let d = await da.json()
        let res = await da.text();
        if (res === 'Success') {
            alert("Sign Up Successful!")
            let jso = {...dat, 'success': 'success'}
            setD(jso)
        }
        else {
            alert('Failed to Signup. Email already exists.')
        }
    }
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmePassword: ""
        },
        validationSchema: validationSchema,
        onSubmit: ()=>{
            data()
        }
    });
    return (
        <div className='container bg-light sign-con mb-5 mt-5 p-3'>
            {localStorage.getItem('name') ? <Navigate to="/" /> : null}
            {d.success === "success"? <Navigate to='/login'  />: null}
            
        <div className="m-4">
            <form onSubmit={formik.handleSubmit}>
            <TextField
                id="firstName"
                name="firstName"
                label="Enter First Name"
                className="ma w-40"
                margin="normal"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                id="lastName"
                name="lastName"
                label="Enter Last Name"
                className="mar w-40"
                margin="normal"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                id="email"
                name="email"
                label="Enter Email"
                className="w-100"
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <br />
            <TextField
                id="password"
                type="password"
                name="password"
                label="Enter Password"
                className="ma w-40"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                id="confirmePassword"
                type="password"
                name="confirmePassword"
                label="Enter Password Again"
                className="mar w-40"
                margin="normal"
                value ={formik.values.confirmePassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmePassword && Boolean(formik.errors.confirmePassword)}
                helperText={formik.touched.confirmePassword && formik.errors.confirmePassword}
                
            />
            <br />
            <Button type="submit" variant="outlined" className="mt-5 w-100 bg-dark text-light">SIGNUP</Button>
            </form>
            <NavLink className="nav-link text-dark mt-3 create" to="/login">Already have an account?</NavLink>
        </div>
        </div>
    )
}

export default Signup