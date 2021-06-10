import styles from '../styles/Stemtest.module.css';
import { useState } from "react";
import Image from "next/image";
import Metadata from "../components/Metadata";
import Button from '../components/stemtest/Button';

export default function stemtest() {

    const questions = [
        {
            "questionNumber": 1,
            "picture": "/assets/hoofdoek.png",
            "question": <p className={styles.text}>Ik vind dat het personeel van de <span className={styles.highlight}>Vlaamse overheid</span> achter het loket een  <span className={styles.highlight}>hoofddoek</span> mag dragen.</p>,
            "input": <div className={styles.buttons}><Button text="Eens" /><Button text="Oneens" /></div>,
            "imageClassName": styles.hoofdoek,
            "bigImageClassName": styles.hoofdoek_image
        },
    ];

    const [question, setQuestion] = useState(questions[0]);

    return (
        <>
        <Metadata/>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <div>
                    <img className={styles.versiering1} src="/assets/versiering.png" width={16} height={23} />
                    <img className={styles.versiering2} src="/assets/versiering 2.png" width={19} height={20} />
                    <img className={styles.versiering3} src="/assets/versiering 3.png" width={23} height={24} />
                </div>
                <div className={question.bigImageClassName}></div>
                <div className={styles.content}>
                    <div className={styles.progress_button}>
                        <div className={styles.progress_div}>
                            <div className={styles.progress} style={{ width: (question.questionNumber * 10) + 'vw' }}> </div>
                        </div>
                        <img className={styles.button_image} src="/assets/kruis.png" ></img>
                    </div>
                    <div className={styles.content_container}>
                        <img className={question.imageClassName} src={question.picture} />
                        <div className={styles.buttons_text}>
                            {question.question}
                            {question.input}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}