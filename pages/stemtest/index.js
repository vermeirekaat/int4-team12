import styles from './Stemtest.module.css';;
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
import ButtonStyles from '../../components/stemtest/Button.module.css';


export default function stemtest() {
    const router = useRouter();
    let timer = useRef(null);



    const [questionSpecs, setquestionSpecs] = useState({ question: 0, direction: '' });
    const { question, direction } = questionSpecs;
    const [isOpen, setisOpen] = useState(false);
    const [close, setClose] = useState(false);
    const [trump, setTrump] = useState(styles.display_none);
    const [glitch, setglitch] = useState(styles.display_none);
    const [Xposition, setXposition] = useState();
    const [Yposition, setYposition] = useState();
    const [progress, setProgress] = useState(3);

    const arrayRight = ['H', 'e', 't', ' ', 'i', 's', ' ', 'a', 'l', 'l', 'e', 'm', 'a', 'a', 'l', ' ', 'd', 'e', ' ', 's', 'c', 'h', 'u', 'l', 'd', ' ', 'v', 'a', 'n', ' ', 'd', 'e', ' ', 's', 'o', 's', 's', 'e', 'n'];
    const arrayLeft = ['H', 'e', 't', ' ', 'z', 'i', 'j', 'n', ' ', 'a', 'l', 'l', 'e', 'm', 'a', 'a', 'l', ' ', 'r', 'a', 'c', 'i', 's', 't', 'e', 'n'];

    const textRight = "Het is allemaal de schuld van de sossen";
    const textLeft = "Het zijn allemaal racisten";

    const popupTextRight = 'U bent aangesloten aan de groep "Alle Vlamingen eerst"';
    const popupTextLeft = 'U bent aangesloten aan de groep "Alle bezittingen afschaffen"';

    const handleClickTrump = () => {
        console.log("click")
        if (direction == "left") {
            setTrump(styles.trumpLeft);
        } else if (direction == "right") {
            setTrump(styles.trumpRight);
        }

        console.log(questions[1].classSmallImage)
    }

    const questions = [
        {
            "questionNumber": 1,
            "classBigImage": styles.hoofdoek_image,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/hoofdoek.png",
            "buttons": <div className={styles.buttons}><Button question={question} text="Eens" classWord={ButtonStyles.button} onClicked={(e) => handleClick(e, "left")} /> <Button classWord={ButtonStyles.button} question={question} text="Oneens" onClicked={(e) => handleClick(e, "right")} /></div>,
            "classContainer": styles.content_container,
            "text": <p className={styles.text}>Ik vind dat het personeel van de <span className={styles.highlight}>Vlaamse overheid</span> achter het loket een  <span className={styles.highlight}>hoofddoek</span> mag dragen.</p>,
        },
        {
            "questionNumber": 2,
            "classBigImage": styles.display_none,
            "classSmallImage": trump,//direction === "left" ? styles.trumpLeft : styles.trumpRight,
            "image_src": "/assets/trump.png",
            "buttons": <div className={styles.buttons} onClick={handleClickTrump} ><Button classWord={direction === 'left' ? ButtonStyles.button : ButtonStyles.disable} question={question} text="Hell yeah" onClicked={(e) => handleClick(e, "left")} /><Button classWord={direction === 'left' ? ButtonStyles.disable : ButtonStyles.button} question={question} text="Wtf??" onClicked={(e) => handleClick(e, "right")} /></div>,
            "classContainer": styles.content_containerTrump,
            "text": <p className={styles.textTrump}>Ik vind niet dat <span className={styles.highlight}>De Vlaamse overheid</span> geen nieuwe  <span className={styles.highlight}>moskeeën</span> meer mag herkennen.</p>
        },
        {
            "questionNumber": 3,
            "classBigImage": styles.maskers_image,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/maskers.gif",
            "buttons": <div className={styles.buttons_text_three} ><TextArea array={direction === 'left' ? arrayLeft : arrayRight} text={direction === 'left' ? textLeft : textRight} /><Button classWord={ButtonStyles.button_three} question={question} text="Dit is mijn mening" onClicked={(e) => handleClick(e, direction)} /> </div>,
            "classContainer": styles.content_containerTrump,
            "text": <p className={styles.text}>Noteer hoe je staat tegenover de <span className={styles.highlight}>Vlaamse politiek</span> de dag van vandaag.</p>
        },
        {
            "questionNumber": progress,
            "classBigImage": styles.car_image,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/auto.png",
            "button1": "Eens",
            "button2": "Oneens",
            "buttons": <div className={styles.buttons}><Button classWord={ButtonStyles.button} Xposition={direction == 'right' ? Xposition : 'auto'} Yposition={direction == 'right' ? Yposition : 'auto'} question={question} text="Eens" onClicked={(e) => handleClick(e, "left")} /> <Button classWord={ButtonStyles.button} Xposition={direction == 'left' ? Xposition : 'auto'} Yposition={direction == 'left' ? Yposition : 'auto'} question={question} text="Oneens" onClicked={(e) => handleClick(e, "right")} /></div>,
            "classContainer": styles.content_container_car,
            "text": <p className={styles.text}>De meest <span className={styles.highlight}>vervuilende auto's</span> moeten in verschillende steden en overal <span className={styles.highlight}>verboden</span> worden.</p>,
        },
        {
            "questionNumber": 5,
            "classBigImage": styles.haanLeeuw,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/haanLeeuw.png",
            "buttons": <div className={styles.buttons}><Button classWord={direction === 'left' ? ButtonStyles.button_check : ButtonStyles.button_wrong}  question={question} text="Liever niet" onClicked={(e) => handleClick(e, "left")} /> <Button classWord={direction === 'left' ? ButtonStyles.button_wrong : ButtonStyles.button_check}  Xposition={direction == 'left' ? Xposition : 'auto'} Yposition={direction == 'left' ? Yposition : 'auto'} question={question} text="yes, please" onClicked={(e) => handleClick(e, "right")} /></div>,
            "classContainer": styles.content_container,
            "text": <p className={styles.text}>België moet gesplitst worden door middel van een muur tussen Vlaanderen en Walonië.</p>,
        },

    ]

    useEffect(() => {
        if (question == 3) {
            const timer = setInterval(() => {
                setProgress(Math.floor(Math.random() * 5))
            }, 500);

            return () => clearInterval(timer);
        }
    });

    useEffect(() => {
        if (question == 2) {
            timer.current = setTimeout(() => {
                setisOpen(false)
            }, 7000);

            timer.current = setTimeout(() => {
                setglitch(styles.glitch)
            }, 7100);

            timer.current = setTimeout(() => {
                setglitch(styles.display_none)
            }, 7500);
        }

        return () => {
            clearTimeout(timer.current);
        }

    }, [question]);



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

    const handleClickCross = () => {
        setClose(true);
    }


    const handleClickCrossClose = () => {
        setClose(false);
    }

    const handleMouseMove = (e) => {
        setXposition(e.pageX );
        setYposition(e.pageY );
    }

    const handleNothing = () => {
        console.log("nothing")
    }

    return (
        <>
            {close && <ClosePopup onClicked={handleClickCrossClose} />}
            <Metadata />
            <section onMouseMove={question == 3 ? handleMouseMove : handleNothing} className={styles.container}>
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
                            {question == 4 && <p className={styles.correct}>Geef het meest juiste antwoord</p>}
                            {questions[question].text}
                            {questions[question].buttons}
                        </div>
                    </div>
                    {question > 0 && <What />}
                </div>
            </section>
        </>
    )

}

