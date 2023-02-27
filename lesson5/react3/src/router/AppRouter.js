import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import MyTodoPage from '../pages/MyTodoPage'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/todos' element={<MyTodoPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter