import styles from '../../styles/Stemtest.module.css';
import popupStyles from './Popup.module.css'
import Button from '../../components/stemtest/Button';
import Versiering from "../../components/stemtest/Versiering";
import Link from 'next/link';
import { useRouter } from 'next/router';




export default function popup() {
    const router = useRouter()
    console.log(router.query.direction);


    return (
        <>
            <img className={popupStyles.bolletjes} src="/assets/bolletjes.svg" alt="bolletjes"></img>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <Versiering />
                <div className={popupStyles.content}>
                    <div className={popupStyles.content_container}>
                        <div className={styles.buttons_text}>
                            <p className={styles.text}>Ben je zeker over je antwoord uit de vorige vraag?</p>
                            <div className={popupStyles.buttons}>
                                <Link href={{ pathname: `/questions/questionTwo`, query: { diretion: router.query.direction } }}>
                                    <a >
                                        <Button text="Ja" />
                                    </a>
                                </Link>
                                <Link href={{pathname: `/questions/stemtest`, query: {question: 'true' }}}>
                                    <a className={popupStyles.no} >
                                        Nee
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
