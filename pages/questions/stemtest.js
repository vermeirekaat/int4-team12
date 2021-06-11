import styles from '../../styles/Stemtest.module.css';;
import Button from '../../components/stemtest/Button';
import Progress from "../../components/stemtest/Progress";
import Versiering from "../../components/stemtest/Versiering";
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router';

export default function stemtest() {
    const router = useRouter();

    const [questionSpecs, setquestionSpecs] = useState({ question: 0, direction: '' });
    const { question, direction } = questionSpecs;

    const questions = [
        {
            "questionNumber": 1,
            "classBigImage": styles.hoofdoek_image,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/hoofdoek.png",
            "button1": "Eens",
            "button2": "Oneens",
            "classContainer": styles.content_container,
            "text": <p className={styles.text}>Ik vind dat het personeel van de <span className={styles.highlight}>Vlaamse overheid</span> achter het loket een  <span className={styles.highlight}>hoofddoek</span> mag dragen.</p>,
        },
        {
            "questionNumber": 2,
            "classBigImage": styles.hoofdoek_image,
            "classBigImage":  styles.display_none,
            "classSmallImage": direction === "left" ? styles.trumpLeft : styles.trumpRight,
            "image_src": "/assets/trump.png",
            "button1": "Hell yeah",
            "button2": "Wtf??",
            "classContainer": styles.content_containerTrump,
            "text": <p className={styles.textTrump}>Ik vind niet dat <span className={styles.highlight}>De Vlaamse overheid</span> geen nieuwe  <span className={styles.highlight}>moskeeën</span> meer mag herkennen.</p>
        },
    ]


    const handleClick = (e, value) => {
        const tmp = { ...questionSpecs };
        tmp.direction= value
        if (question < 5){
            tmp[question] = tmp.question++
        }
        setquestionSpecs(tmp);
        console.log(questionSpecs)
    }



    return (
        <>
            <section className={styles.container}>
                <div className={styles.background}></div>
                <Versiering />
                <div className={questions[question].classBigImage}></div>
                <div className={styles.content}>
                    <Progress value={questions[question].questionNumber} />
                    <div className={questions[question].classContainer}>
                        <img className={questions[question].classSmallImage} src={questions[question].image_src} />
                        <div className={styles.buttons_text}>
                            {questions[question].text}
                            <div className={styles.buttons}>
                                <Button text={questions[question].button1} onClicked={(e)=>handleClick(e, "left")}/>
                                <Button text={questions[question].button2} onClicked={(e) => handleClick(e, "right")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

