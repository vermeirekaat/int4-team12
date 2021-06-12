import styles from './Progress.module.css';

export default function Progress({ value }) {

    return (
        <div className={styles.progress_button}>
            <p className={styles.text}>Stap {value}</p>
            <div className={styles.progress_div}>
                <div className={styles.progress} style={{ width: (value * 10) + 'vw' }}> </div>
            </div>
                <span className={styles.close}></span>
        </div>
    );
}