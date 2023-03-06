import React from 'react'
import { NavLink } from 'react-router-dom'

const UserButton = () => {


    const user = JSON.parse(localStorage.getItem('MyUser'))

    const LogOut = () => {
        localStorage.clear()
        window.location.reload()
    }



    const authUser = () => {
        if (user === null) {
            return (
                <NavLink to='/login'>Login</NavLink>
            )
        }
        else {
            return (
                // <NavLink to='/home'>
                //     {user.email}
                // </NavLink>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {user.email}
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={LogOut}><a className="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                </div>
            )
        }
    }






    return (
        <>
            {authUser()}
        </>
    )
}

export default UserButton