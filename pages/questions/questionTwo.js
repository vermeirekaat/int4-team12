import styles from '../../styles/Stemtest.module.css';
import questionTwoStyles from './QuestionTwo.module.css'
import Button from '../../components/stemtest/Button';
import Progress from "../../components/stemtest/Progress";
import Versiering from "../../components/stemtest/Versiering";
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router';


export default function questionTwo() {
    const router = useRouter();

    console.log(router.query.direction)

    return (
        <>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <Versiering />
                <div className={styles.content}>
                    <Progress value={2} />
                    <div className={questionTwoStyles.content_container}>
                        <div className={styles.buttons_text}>
                            <p className={questionTwoStyles.text}>Ik vind niet dat <span className={styles.highlight}>De Vlaamse overheid</span> geen nieuwe  <span className={styles.highlight}>moskeeën</span> meer mag herkennen.</p>
                            <div className={styles.buttons}>
                                <img className={router.query.direction === "left" ? questionTwoStyles.trumpLeft : questionTwoStyles.trumpRight} src="/assets/trump.png" alt="trump"></img>
                                <Link href={{ pathname: `/questions/questionThree`, query: { direction: "left" } }}>
                                    <a >
                                        <Button text="Hell yeah" />
                                    </a>
                                </Link>
                                <Link href={{ pathname: `/questions/questionThree`, query: { direction: "right" } }}>
                                    <a >
                                        <Button text="Wtf??" />
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