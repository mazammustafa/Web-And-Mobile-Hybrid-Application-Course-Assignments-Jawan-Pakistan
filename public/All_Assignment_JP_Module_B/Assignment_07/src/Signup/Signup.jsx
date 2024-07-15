import React from 'react'
import styles from './Signup.module.css'
import image from "../assets/signupImg.jpg"

const Signup = () => {
    return (
        <>
            <div className={styles.signup}>
                <div className={styles.container}>
                    <div className={styles.signupwrapper}>
                        <div className={styles.signupImg}><img src={image} alt="" /></div>
                        <div className={styles.formContainer}>
                            <h2>Sign Up</h2>
                            <form className={styles.signupForm}>
                                <input type="text" placeholder="Username" required />
                                <input type="email" placeholder="Email" required />
                                <input type="password" placeholder="Password" required />
                                <input type="password" placeholder="Confirm Password" required />
                                <div><input type="checkbox" name="" id="" /> I agree with the Terms and conditions</div>
                                <button type="submit">Sign Up</button>
                            </form>
                            <p>
                                Already have an account? <a href='/Login'>Log in</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
