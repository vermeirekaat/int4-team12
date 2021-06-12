import styles from './ClosePopup.module.css';
import Button from './ButtonPurple';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ClosePopup({onClicked}) {
    const router = useRouter()
    return (
        <>
            <div className={styles.close_container}>
                <div className={styles.box}>
                    <span onClick={onClicked}  className={styles.close}></span>
                    <p className={styles.text}>Ben je zeker dat je wil afsluiten?</p>
                    <div className={styles.buttons}>
                        <Link href={{ pathname: `/campagne`, query: { knows: 'false' } }}>
                            <a >
                                <Button text="Ja, want ik vertrouw dit niet" />
                            </a>
                        </Link>
                        <Link href={{ pathname: `/campagne`, query: { knows: 'true' } }}>
                            <a className={styles.no} >
                               Ja, want ik weet wat dit is
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.full_page}></div>
        </>
    )
}