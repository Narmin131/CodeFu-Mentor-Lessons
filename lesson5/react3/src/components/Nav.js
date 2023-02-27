import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
const Nav = () => {

    const { items } = useCart()

    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
                <div className="container-fluid">
                    <p className="navbar-brand" href="#">Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/cart'>Cart</NavLink>
                                <span style={{color:'white'}}>{items.length}</span>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/todos'>Todos Page</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav