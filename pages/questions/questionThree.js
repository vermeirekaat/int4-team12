import styles from '../../styles/Stemtest.module.css';
import questionThreeStyles from './QuestionThree.module.css'
import Button from '../../components/stemtest/Button';
import Progress from "../../components/stemtest/Progress";
import Versiering from "../../components/stemtest/Versiering";
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router';
import TextArea from '../../components/stemtest/TextArea'


export default function questionThree () {
    const router = useRouter();

    const arrayRight = ['H', 'e', 't', ' ', 'i', 's', ' ', 'a', 'l', ' ', 'd', 'e', ' ', 's', 'c', 'h', 'u', 'l', 'd', ' ', 'v', 'a', 'n', ' ', 'd', 'e', ' ', 's', 'o', 's', 's', 'e', 'n'];
    const arrayLeft = ['E', 'i', 'g', 'e', 'n', ' ', 'v', 'o', 'l', 'k', ' ', 'l', 'a', 'a', 't', 's', 't'];

    const textRight = ["Het is al de schuld van de sossen"];
    const textLeft = ["Eigen volk laatst"]

    return (
        <section className={styles.container}>
            <div className={styles.background}></div>
            <Versiering />
            <div className={questionThreeStyles.maskers_image}></div>
            <div className={styles.content}>
                <Progress value={3} />
                <div className={styles.content_container}>
                    <img className={styles.hoofdoek} src="/assets/maskers.gif" />
                    <div className={styles.buttons_text}>
                        <p className={styles.text}>Noteer hoe je staat tegenover de <span className={styles.highlight}>Vlaamse politiek</span> de dag van vandaag.</p>
                        <div className={questionThreeStyles.buttons}>
                            <TextArea array={router.query.direction === 'left' ? arrayLeft : arrayRight} text={router.query.direction === 'left' ? textLeft : textRight}/>
                            <Link href={{ pathname: `/questions/questionTwo`, query: { direction: router.query.direction } }}>
                                <a className={questionThreeStyles.button}>
                                    <Button text="Dit is mijn mening" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}