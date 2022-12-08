import React, { useEffect, useState } from "react";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required("First Name is required").matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(7, "First Name must be 7 digit long").max(32, "First Name must be less than 32 characters"),
    password: yup.string().min(8, "Password Must be 8 Digit Long"),
    confirmePassword: yup.string().min(8, "Password Must be 8 Digit Long")
        .oneOf([yup.ref('password'), null], "Password Must Match")

})
const EditProfile = () => {
    const [d, setD] = useState('')
    const formik = useFormik({
        initialValues: {
            name: localStorage.getItem("name"),
            password: "",
            confirmePassword: ""
        },
        validationSchema: validationSchema,
        onSubmit: ()=>{
            data()
        }
    });

    
    const data=async()=>{
        if(formik.values.name == localStorage.getItem("name") &&  formik.values.password == ""){
            alert("Your Credentials are same as previous one's")
        }
        else{
        let dat = {"name": formik.values.name, "previousemail":localStorage.getItem("email"), "password": formik.values.password}
        console.log(dat)
        const da = await fetch('http://127.0.0.1:5000/editProfile',{
            method: 'POST',
            body: JSON.stringify(dat)
        })
        // let d = await da.json()
        let res = await da.text();
        if (res === 'Success') {
            alert("Profile Updated Successfully!")
            let jso = {...dat, 'success': 'success'}
            setD(jso)
            window.location.reload()
        }
        else {
            alert('Failed to Update.')
        }
        }
        
    }

    return (
        <>
            {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
            {d.success === "success"? localStorage.setItem("name", d.name): null}
            <div className="container sign-con mb-5 mt-5 p-3">
                <h1>Edit Profile</h1>
                <form action="" className="m-4" onSubmit={formik.handleSubmit}>
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
                helperText={formik.touched.confirmePassword && formik.errors.confirmePassword} />

                <Button type="submit" variant="outlined" className="my-5 w-100 bg-dark text-light">Update Info</Button>
                </form>
            </div>

        </>

    );
};

export default EditProfile;
