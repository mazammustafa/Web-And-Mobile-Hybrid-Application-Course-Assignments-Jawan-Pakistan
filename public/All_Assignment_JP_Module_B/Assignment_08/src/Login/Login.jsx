import React from 'react'
// import styles from './Login.module.css'
import image from "../assets/signupImg.jpg"


const Login = () => {
    return (
        <>
            <div className="login d-flex align-items-center justify-content-center vh-100">
                <div className="container shadow w-50 py-5 px-4 rounded-4">
                    <div className="loginwrapper d-flex justify-content-between align-items-center">
                    <div className="imgContainer col-lg-6 col-sm-12">
                            <img src={image} alt="Login Image" className="loginImg w-100" />
                        </div>
                        <div className="formContainer col-lg-6 col-sm-12">
                            <h2 className="fs-1  mb-5">Login</h2>
                            <form className="loginForm d-flex flex-column gap-4">
                                <input type="text" className="border-top-0 border-start-0 mb-3 p-2" placeholder="Username" />
                                <input type="password" className="border-top-0 border-start-0 mb-3 p-2" placeholder="Password" />
                                <button type="submit" className="btn btn-primary rounded-pill w-50">Login</button>
                                <p>
                                    I don't have an account? <a href='/Signup'>Sign Up</a>
                                </p>
                            </form>
                        </div>
                        
                        {/* <img src={image} alt="Login Image" className="loginImg w-50" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
