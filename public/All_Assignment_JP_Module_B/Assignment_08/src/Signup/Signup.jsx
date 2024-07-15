import React from 'react'
import image from "../assets/signupImg.jpg"

const Signup = () => {
    return (
        <>
            <div className="signup d-flex align-items-center justify-content-center vh-100">
                <div className="container shadow w-50 py-5 px-4 rounded-4">
                    <div className="signupwrapper d-flex justify-content-between align-items-center">
                        <div className="formContainer col-lg-6 col-sm-12">
                            <h2 className="fs-1 fw-900  mb-5">Sign Up</h2>
                            <form className="signupForm d-flex flex-column gap-4">
                                <input type="text" className="border-top-0 border-start-0 mb-3 p-2" placeholder="Username" />
                                <input type="email" className="border-top-0 border-start-0 mb-3 p-2" placeholder="Email" />
                                <input type="password" className="border-top-0 border-start-0 mb-3 p-2" placeholder="Password" />
                                <input type="password" className="border-top-0 border-start-0 mb-3 p-2" placeholder="Confirm Password" />
                                <button type="submit" className="btn btn-primary rounded-pill w-50">Sign up</button>
                                <p>
                                Already have an account? <a href='/Login'>Login</a>
                                </p>
                            </form>
                        </div>
                        <div className="imgContainer col-lg-6 col-sm-12">
                            <img src={image} alt="signup Image" className="signupImg w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
