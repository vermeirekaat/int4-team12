import styles from '../../styles/Stemtest.module.css';;
import Button from '../../components/stemtest/Button';
import Progress from "../../components/stemtest/Progress";
import Versiering from "../../components/stemtest/Versiering";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Popup from '../../components/stemtest/FacebookPopup';
import TextArea from '../../components/stemtest/TextArea';
import ClosePopup from '../../components/stemtest/ClosePopup';
import Metadata from '../../components/Metadata';
import What from '../../components/stemtest/What';


export default function stemtest() {
    const router = useRouter();
    const mountedRef = useRef(true)
    let timer = useRef(null);

    useEffect(() => {
        return () => {
            mountedRef.current = false
        }
    }, []);



    const [questionSpecs, setquestionSpecs] = useState({ question: 0, direction: '' });
    const { question, direction } = questionSpecs;
    const [isOpen, setisOpen] = useState(false);
    const [close, setClose] = useState(false);
    const [trump, setTrump] = useState(styles.display_none);
    const [glitch, setglitch] = useState(styles.display_none);

    const arrayRight = ['H', 'e', 't', ' ', 'i', 's', ' ', 'a', 'l', 'l', 'e', 'm', 'a', 'a', 'l', ' ', 'd', 'e', ' ', 's', 'c', 'h', 'u', 'l', 'd', ' ', 'v', 'a', 'n', ' ', 'd', 'e', ' ', 's', 'o', 's', 's', 'e', 'n'];
    const arrayLeft = ['H', 'e', 't', ' ', 'z', 'i', 'j', 'n', ' ', 'a', 'l', 'l', 'e', 'm', 'a', 'a', 'l', ' ', 'r', 'a', 'c', 'i', 's', 't', 'e', 'n'];

    const textRight = "Het is allemaal de schuld van de sossen";
    const textLeft = "Het zijn allemaal racisten";

    const popupTextRight = 'U bent aangesloten aan de groep "Alle Vlamingen eerst"';
    const popupTextLeft = 'U bent aangesloten aan de groep "Alle bezittingen afschaffen"';

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
            "classBigImage": styles.display_none,
            "classSmallImage": trump,//direction === "left" ? styles.trumpLeft : styles.trumpRight,
            "image_src": "/assets/trump.png",
            "button1": "Hell yeah",
            "button2": "Wtf??",
            "classContainer": styles.content_containerTrump,
            "text": <p className={styles.textTrump}>Ik vind niet dat <span className={styles.highlight}>De Vlaamse overheid</span> geen nieuwe  <span className={styles.highlight}>moskeeën</span> meer mag herkennen.</p>
        },
        {
            "questionNumber": 3,
            "classBigImage": styles.maskers_image,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/maskers.gif",
            "button1": "Dit is mijn mening",
            "classContainer": styles.content_containerTrump,
            "text": <p className={styles.text}>Noteer hoe je staat tegenover de <span className={styles.highlight}>Vlaamse politiek</span> de dag van vandaag.</p>
        },
    ]

    useEffect(() => {
        makeGlitch();
    }, [question])

    const handleClick = (e, value) => {
        const tmp = { ...questionSpecs };
        tmp.direction = value
        if (question < 5) {
            tmp[question] = tmp.question++
        }
        if (question == 1) {
            setisOpen(true);
        }
        setquestionSpecs(tmp);
    }

    const openPopup = () => {
        setTimeout(() => (setisOpen(false)), 7000);
    };

    if (question == 2) {
        openPopup();
    }

    const handleClickTrump = () => {
        console.log("click")
        if (direction == "left") {
            setTrump(styles.trumpLeft);
        } else if (direction == "right") {
            setTrump(styles.trumpRight);
        }

        console.log(questions[1].classSmallImage)
    }

    const handleClickCross = () => {
        setClose(true);
    }


    const handleClickCrossClose = () => {
        setClose(false);
    }

    const makeGlitch = () => {
        if (question == 2) {
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setglitch(styles.glitch)
            }, 9000);

            timer.current = setTimeout(() => {
                setglitch(styles.display_none)
            }, 9400);

        }

    }

    return (
        <>
            {close && <ClosePopup onClicked={handleClickCrossClose} />}
            <Metadata />
            <section className={styles.container}>
                <div className={styles.background}></div>
                <img className={glitch} src="/assets/glitch.gif"></img>
                <Versiering />
                {question == 2 ? <div className={styles.maskers_image}></div> : ''}
                <div className={questions[question].classBigImage}></div>
                <div className={styles.content}>
                    <Progress value={questions[question].questionNumber} onClicked={handleClickCross} />
                    <div className={questions[question].classContainer}>
                        <img className={questions[question].classSmallImage} src={questions[question].image_src} />
                        <div className={styles.buttons_text}>
                            {isOpen && <Popup text={direction === "left" ? popupTextLeft : popupTextRight} />}
                            {questions[question].text}
                            <div className={question == 2 ? styles.buttons_text_three : styles.buttons} onClick={handleClickTrump} >
                                {question == 2 ? <TextArea array={direction === 'left' ? arrayLeft : arrayRight} text={direction === 'left' ? textLeft : textRight} /> : ''}
                                {question == 2 ? <Button question={question} text={questions[question].button1} onClicked={(e) => handleClick(e, direction)} /> : <Button classWord={direction === 'left' ? "button" : "disable"} question={question} text={questions[question].button1} onClicked={(e) => handleClick(e, "left")} />}
                                {question == 2 ? '' : <Button classWord={direction === 'left' ? "disable" : "button"} question={question} text={questions[question].button2} onClicked={(e) => handleClick(e, "right")} />}
                            </div>
                        </div>
                    </div>
                    {question > 0 && <What />}
                </div>
            </section>
        </>
    )

}

