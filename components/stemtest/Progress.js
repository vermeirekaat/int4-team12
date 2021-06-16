import styles from './Progress.module.css';
import Back from './Back'

export default function Progress({ value, onClicked }) {

    const handleMouseEnter = (e) =>{
        e.currentTarget.children[0].innerHTML = "no way back"
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.children[0].innerHTML = "Vorige vraag"
    }


    return (
        <>
        <div className={styles.progress_button}>
            <p className={styles.text}>Stap {value}</p>
            <div className={styles.progress_div}>
                <div className={styles.progress} style={{ width: (value * 10) + 'vw' }}> </div>
            </div>
                <span onClick={onClicked} className={styles.close}></span>
        </div>
            {value == 1 ? '' : <div onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}  className={styles.icon}><p className={styles.text_arrow}>Vorige vraag</p></div>}
        </>
    );
}