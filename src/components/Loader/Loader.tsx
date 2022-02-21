import React from "react";
import styles from './Loader.module.css'


const Loader: React.FC = () => {
    return (
        <div className={styles.loadingBar}>
            <div className={`${styles.round} ${styles.roundGreen}`}/>
            <div className={`${styles.round} ${styles.roundRed}`}/>
            <div className={`${styles.round} ${styles.roundYellow}`}/>
            <div className={`${styles.round} ${styles.roundAqua}`}/>
            <div className={`${styles.round} ${styles.roundLightgray}`}/>
            <div className={`${styles.round} ${styles.roundGray}`}/>
        </div>
    )
}

export default Loader;