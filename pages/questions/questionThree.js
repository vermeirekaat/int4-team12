import styles from '../../styles/Stemtest.module.css';
import questionThreeStyles from './QuestionThree.module.css'
import Button from '../../components/stemtest/Button';
import Progress from "../../components/stemtest/Progress";
import Versiering from "../../components/stemtest/Versiering";
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router';


export default function questionThree () {
    const router = useRouter();

    return (
        <section className={styles.container}>
            <div className={styles.background}></div>
            <Versiering />
            <div className={questionThreeStyles.maskers_image}></div>
            <div className={styles.content}>
                <Progress value={1} />
                <div className={styles.content_container}>
                    <img className={styles.hoofdoek} src="/assets/maskers.gif" />
                    <div className={styles.buttons_text}>
                        <p className={styles.text}>Noteer hoe je staat tegenover de <span className={styles.highlight}>Vlaamse politiek</span> de dag van vandaag.</p>
                        <div className={styles.buttons}>
                            <Link href={router.query.question === "true" ? { pathname: `/questions/questionTwo`, query: { direction: router.query.direction } } : { pathname: `/questions/popup`, query: { direction: "right" } }}>
                                <a >
                                    <Button text="Oneens" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}