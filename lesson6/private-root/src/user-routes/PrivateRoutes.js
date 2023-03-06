import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {


    const user = localStorage.getItem('MyUser')

    
    if (user) {
        return <Outlet />
    }

    else {
        return <Navigate to='login' />
    }



}

export default PrivateRoutes