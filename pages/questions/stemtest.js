import styles from '../../styles/Stemtest.module.css';;
import Button from '../../components/stemtest/Button';
import Progress from "../../components/stemtest/Progress";
import Versiering from "../../components/stemtest/Versiering";
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router';




export default function stemtest({props}) {
    const router = useRouter()
    console.log(router.query.question);


    return (
        <>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <Versiering />
                <div className={styles.hoofdoek_image}></div>
                <div className={styles.content}>
                    <Progress value={1} />
                    <div className={styles.content_container}>
                        <img className={styles.hoofdoek} src="/assets/hoofdoek.png" />
                        <div className={styles.buttons_text}>
                            <p className={styles.text}>Ik vind dat het personeel van de <span className={styles.highlight}>Vlaamse overheid</span> achter het loket een  <span className={styles.highlight}>hoofddoek</span> mag dragen.</p>
                            <div className={styles.buttons}>
                                <Link href={router.query.question === "true" ? { pathname: `/questions/questionTwo`, query: { direction: "left" } } : { pathname: `/questions/popup`, query: { direction: "left" } }}>
                                    <a >
                                        <Button text="Eens" />
                                    </a>
                                </Link>
                                <Link href={router.query.question === "true" ? { pathname: `/questions/questionTwo`, query: { direction: "right" } } : { pathname: `/questions/popup`, query: { direction: "right" } }}>
                                    <a >
                                        <Button text="Oneens" />
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

