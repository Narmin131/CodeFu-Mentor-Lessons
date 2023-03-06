import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import UserInfo from '../user-routes/UserInfo'
import PrivateRoutes from '../user-routes/PrivateRoutes'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route element={<PrivateRoutes />}>
                        <Route path='/user' element={<UserInfo />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter