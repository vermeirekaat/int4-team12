import styles from '../styles/Stemtest.module.css';
import { useState } from "react";
import Image from "next/image";
import Button from '../components/stemtest/Button'

export default function stemtest() {

    const questions = [
        {
            "questionNumber": 1,
            "picture": "/assets/hoofdoek.png",
            "question": <p className={styles.text}>Ik vind dat het personeel van de <span className={styles.highlight}>Vlaamse overheid</span> achter het loket een  <span className={styles.highlight}>hoofddoek</span> mag dragen.</p>,
            "input": <div className={styles.buttons}><Button text="Eens" /><Button text="Oneens" /></div>,
        },
    ];

    const [question, setQuestion] = useState(questions[0]);

    return (
        <>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <div>
                    <img className={styles.versiering1} src="/assets/versiering.png" width={16} height={23}/>
                    <img className={styles.versiering2} src="/assets/versiering 2.png" width={19} height={20} />
                    <img className={styles.versiering3} src="/assets/versiering 3.png" width={23} height={24} />
                </div>
                <div className={styles.content}>
                    <Image src={question.picture} width={416} height={542} />
                    {question.question}
                    {question.input}
                </div>
            </section>
        </>
    )

}