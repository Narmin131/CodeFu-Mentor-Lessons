import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {


    const email = useRef()
    const password = useRef()

    const location = useNavigate()

    const user = {
        email: 'mnermin064@gmail.com',
        pass: 'nermin1'
    }


    const submitForm = (e) => {
        e.preventDefault()
        if (email.current.value === user.email && password.current.value === user.pass) {
            localStorage.setItem('MyUser', JSON.stringify(user))
            location('/')
            window.location.reload()
        }
        else {
            alert('Something went wrong')
        }
    }


    const arr = [5, 6, 7, 9]
    console.log(...arr);


    return (
        <>
            <div className="container mt-5">
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" ref={email} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" ref={password} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Login