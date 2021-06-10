import styles from '../styles/Stemtest.module.css';
import { useState } from "react";
import Image from "next/image";

export default function stemtest() {

    const questions = [
        {
            "questionNumber": 1,
            "picture": "/assets/hoofdoek.png",
            "question": <p className={styles.text}>Ik vind dat het personeel van de <span className={styles.highlight}>Vlaamse overheid</span> achter het loket een  <span className={styles.highlight}>hoofddoek</span> mag dragen.</p>,
            "button1": "Eens",
            "button2": "Oneens",
        },
    ];

    const [question, setQuestion] = useState(questions[0]);

    return (
        <>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <div className={styles.content}>
                    <Image src={question.picture} width={416} height={542} />
                    {question.question}
                </div>
            </section>
        </>
    )

}