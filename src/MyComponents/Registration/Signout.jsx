import React from 'react';
import  { Navigate } from 'react-router-dom'

const Signout = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('role')
    return(
        <div>
            <Navigate to="/login" />
        </div>
    )
}

export default Signout