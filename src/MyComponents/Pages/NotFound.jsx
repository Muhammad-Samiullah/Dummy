import React from 'react'
import {useLocation, NavLink} from "react-router-dom";
const NotFound = () => {
    const loc = useLocation()
    return(
        <div className='container' style={{margin: '80px'}}>
            <h1 style={{fontSize: '100px'}}>404</h1>
            {/* <Navigate to="/"/> */}
            <h1 className='text-danger'>{loc.pathname} is not the right url</h1>
            <NavLink to='/' className='nav-link w-5 p-3 text-light bg-primary mt-5' style={{width:'120px'}}>Go to Home</NavLink>
        </div>
    )
}

export default NotFound