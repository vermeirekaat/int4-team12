import styles from './FacebookPopup.module.css'

export default function FacebookPopup({ title, text }) {
    return (
        <>
            <div className={styles.popup_box}>
                <div className={styles.box}>
                    <div className={styles.header_container}>
                        <div className={styles.text_image}>
                            <img src="/assets/facebook-logo-bewerkt.png" height={50}></img>
                            <h1 className={styles.title}>FAKEBOOK</h1>
                        </div>
                        <p className={styles.time}>nu</p>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.text}>{text}</p>
                </div>
                <p className={styles.close_icon}>Undo</p>
            </div>
        </>
    )
}