import styles from './Progress.module.css';
import Back from './Back'

export default function Progress({ value }) {

    const handleMouseEnter = (e) =>{
        e.currentTarget.innerHTML = "Er is geen weg terug"
    }

    console.log(typeof(value))

    return (
        <>
        <div className={styles.progress_button}>
            <p className={styles.text}>Stap {value}</p>
            <div className={styles.progress_div}>
                <div className={styles.progress} style={{ width: (value * 10) + 'vw' }}> </div>
            </div>
                <span className={styles.close}></span>
        </div>
            {value == 1 ? '' : <div className={styles.icon}><p onMouseEnter={(e) => handleMouseEnter(e)} className={styles.text_arrow}>Vorige vraag</p></div>}
        </>
    );
}