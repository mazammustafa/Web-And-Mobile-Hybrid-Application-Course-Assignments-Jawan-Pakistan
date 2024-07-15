import React from 'react'
import styles from "./CampusLife.module.css"
import Button from '../Button/Button'
const CampusLife = () => {
    return (
        <>
            <div className={styles.campusLife}>
                <div className={styles.container}>
                    <div className={styles.campusLifeContent}>
                        <h2>Campus Life</h2>
                        <div className={styles.headingAfterImg}>
                            <img src="data:image/png;base64,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" alt="image"></img>
                        </div>
                        <div className={styles.CampusLifeWrapper}>
                            <div className={styles.left}>
                                <ul>
                                    <li data-wow-duration="0.3s"><div class={styles.icon}><img src="https://echooling-react.vercel.app/static/media/1.f0958495fd0e3910630f618ed5b56f77.svg" alt="image" /></div><div class={styles.text}><h4>Do More, Stress Less</h4><p>Why I say old chap that is spiffing he legged <br />it in my flat easy peasy.</p></div><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li>
                                    <li data-wow-duration="0.3s"><div class={styles.icon}><img src="https://echooling-react.vercel.app/static/media/1.f0958495fd0e3910630f618ed5b56f77.svg" alt="image" /></div><div class={styles.text}><h4>The Business Intelligence</h4><p>Why I say old chap that is spiffing he legged <br />it in my flat easy peasy.</p></div><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li>
                                    <li data-wow-duration="0.3s"><div class={styles.icon}><img src="https://echooling-react.vercel.app/static/media/1.f0958495fd0e3910630f618ed5b56f77.svg" alt="image" /></div><div class={styles.text}><h4>System Administration</h4><p>Why I say old chap that is spiffing he legged <br />it in my flat easy peasy.</p></div><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li>
                                </ul>
                            </div>
                            <div className={styles.right}>
                                <img src="https://echooling-react.vercel.app/static/media/4.ff3894830e71cdd1965f.png" alt="" />
                                <img class={styles.shape1} src="data:image/png;base64,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" alt="image"></img>
                            </div>
                        </div>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampusLife