import styles from '../../styles/Stemtest.module.css';
import popupStyles from './Popup.module.css'
import { useParams } from "react";
import Button from '../../components/stemtest/Button';
import Progress from "../../components/stemtest/Progress";
import Versiering from "../../components/stemtest/Versiering";
import Link from 'next/link';




export default function popup() {


    return (
        <>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <Versiering />
                <div className={popupStyles.content}>
                    <div className={popupStyles.content_container}>
                        <div className={styles.buttons_text}>
                            <p className={styles.text}>Ben je zeker over je antwoord uit de vorige vraag?</p>
                            <div className={popupStyles.buttons}>
                                <Link href={`/questions/stemtest`}>
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