import styles from './ClosePopup.module.css';
import Button from './ButtonPurple';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ClosePopup({ onClicked}) {
    return (
        <>
            <div className={styles.close_container}>
                <div className={styles.box}>
                    <span onClick={onClicked} className={styles.close}></span>
                    <p className={styles.text}>U gaat akkoord met de stelling, volgens de computer.</p>
                    <Button text="Undo" />
                </div>
            </div>
            <div className={styles.full_page}></div>
        </>
    )
}