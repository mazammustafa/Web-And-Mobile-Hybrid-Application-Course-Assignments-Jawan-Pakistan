import React from 'react'
import styles from "./lmsplatform.module.css"
import Button from '../Button/Button'
// import './index.css'


const LmsPlatform = () => {
    return (
        <div>
            <div className={styles.lmsplatform}>
                <div className={styles.container}>
                    <div className={styles.lmsplatformContent}>
                        <div className={styles.left}><div className={styles.img1}><img src="https://echooling-react.vercel.app/static/media/ab.fcda2469b98ffc37a148.png" alt="" /></div>
                            <div className={styles.img2}><img src="https://echooling-react.vercel.app/static/media/badge.ae149076478c64c7b217.png" alt="" /></div>
                        </div>
                        <div className={styles.right}>
                            <h1><span>Welcome to </span> <br />
                                Echooling LMS Platform</h1>
                            <p>Education is both the act of teaching knowledge to others and
                                the act of receiving knowledge from someone else.</p>
                            <p>Have questions? <a href="">Get Free Guide</a></p>
                            <hr />
                            <p>Education also refers to the knowledge received through schooling instruction
                                and to the institution of teaching as a whole. The main purpose of education
                                is the integral development of a person.</p>
                            <div className={styles.btnWithSupport}>
                                <Button />
                                <div className={styles.support}>
                                    <em>Get Support</em>
                                    <a href="/mailto:support@react.com">support@react.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LmsPlatform
