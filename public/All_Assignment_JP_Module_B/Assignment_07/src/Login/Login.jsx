import React from 'react'
import styles from './Login.module.css'
import image from "../assets/signupImg.jpg"

const Login = () => {
    return (
        <>
            <div className={styles.login}>
                <div className={styles.container}>
                    <div className={styles.loginwrapper}>
                        <div className={styles.formContainer}>
                            <h2>Log In</h2>
                            <form className={styles.loginForm}>
                                <input type="text" placeholder="Username" required />
                                <input type="password" placeholder="Password" required />
                                <div><input type="checkbox" name="" id="" /> I agree with the Terms and conditions</div>
                                <button type="submit">Login</button>
                            </form>
                            <p>
                                I don't have an account? <a href='/Signup'>Sign Up</a>
                            </p>
                        </div>
                        <div className={styles.loginImg}><img src={image} alt="" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
