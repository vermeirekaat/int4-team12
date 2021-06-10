import styles from './Progress.module.css'

export default function Progress ({value}){

    return (
        <div className={styles.progress_button}>
            <div className={styles.progress_div}>
                <div className={styles.progress} style={{ width: (value* 10) + 'vw' }}> </div>
            </div>
            <img className={styles.button_image} src="/assets/kruis.png" ></img>
        </div>
    );
}