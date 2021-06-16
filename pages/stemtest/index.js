import styles from './Stemtest.module.css';;
import Button from '../../components/stemtest/Button';
import ButtonTwo from '../../components/stemtest/ButtonTwo';
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
import Image from "next/image";
import ComputerPopup from '../../components/stemtest/ComputerPopup';
import dynamic from "next/dynamic";


export default function stemtest() {
    const router = useRouter();
    let timer = useRef(null);``

    const [questionSpecs, setquestionSpecs] = useState({ question: 0, direction: '' });
    const { question, direction } = questionSpecs;
    const [isOpen, setisOpen] = useState(false);
    const [isOpenTwo, setisOpenTwo] = useState(false);
    const [close, setClose] = useState(false);
    const [trump, setTrump] = useState(styles.display_none);
    const [glitch, setglitch] = useState(styles.display_none);
    const [Xposition, setXposition] = useState();
    const [Yposition, setYposition] = useState();
    const [progress, setProgress] = useState(3);
    const [timing, setTiming] = useState(3000);
    const [textArea, setTextArea] = useState(false);

    const arrayRight = ['H', 'e', 't', ' ', 'i', 's', ' ', 'a', 'l', 'l', 'e', 'm', 'a', 'a', 'l', ' ', 'd', 'e', ' ', 's', 'c', 'h', 'u', 'l', 'd', ' ', 'v', 'a', 'n', ' ', 'd', 'e', ' ', 's', 'o', 's', 's', 'e', 'n', '!'];
    const arrayLeft = ['D', 'e', ' ', 'r', 'a', 'c', 'i', 's', 't', 'e', 'n', ' ', 'h', 'e', 'b', 'b', 'e', 'n', ' ', 'd', 'e', ' ', 'm', 'a', 'c', 'h', 't', ' ', 'i', 'n', ' ', 'o', 'n', 's', ' ', 'l', 'a', 'n', 'd', '.'];

    const textRight = "Het is allemaal de schuld van de sossen!";
    const textLeft = "De racisten hebben de macht in ons land.";


    const popupTextRight = 'U bent aangesloten aan de groep "Alle Vlamingen eerst"';
    const popupTextLeft = 'U bent aangesloten aan de groep "Alle bezittingen afschaffen"';

    const ComputerpopupTextLeft = 'U gaat niet akkoord met de stelling, volgens de computer.';
    const ComputerpopupTextRight = 'U gaat akkoord met de stelling, volgens de computer.';

    const handleClickTrump = () => {
        if (direction == "left") {
            setTrump(styles.trumpLeft);
        } else if (direction == "right") {
            setTrump(styles.trumpRight);
        }

    }

    const handleChange = (e) =>{
        if(e.currentTarget.value != ''){
           setTextArea(true)
        }
    }

    const handleNothing = () => {
        console.log("nothing")
    }

    const questions = [
        {
            "questionNumber": 1,
            "classBigImage": styles.hoofdoek_image,
            "classSmallImage": styles.hoofdoek,
            "width": 277,
            "height": 362,
            "image_src": "/assets/hoofdoek.png",
            "buttons": <div className={styles.buttons}><Button question={question} text="Eens" classWord={ButtonStyles.button} onClicked={(e) => handleClick(e, "left")} /> <Button classWord={ButtonStyles.button} question={question} text="Oneens" onClicked={(e) => handleClick(e, "right")} /></div>,
            "classContainer": styles.content_container,
            "text": <p className={styles.text}>Ik vind dat het personeel van de <span className={styles.highlight}>Vlaamse overheid</span> achter het loket een  <span className={styles.highlight}>hoofddoek</span> mag dragen.</p>,
        },
        {
            "questionNumber": 2,
            "classBigImage": styles.moskee,
            "classSmallImage": styles.hoofdoek,
            "width": 285,
            "height": 245,
            "image_src": "/assets/moskee.png",
            "buttons": <div className={styles.buttons} onClick={handleClickTrump} ><Button classWord={direction === 'left' ? ButtonStyles.button : ButtonStyles.disable} question={question} text="Hell yeah" onClicked={(e) => handleClick(e, "left")} /><Button classWord={direction === 'left' ? ButtonStyles.disable : ButtonStyles.button} question={question} text="Wtf??" onClicked={(e) => handleClick(e, "right")} /></div>,
            "classContainer": styles.content_containerTrump,
            "text": <p className={styles.textTrump}>Ik vind niet dat <span className={styles.highlight}>De Vlaamse overheid</span> geen nieuwe  <span className={styles.highlight}>moskeeën</span> meer mag herkennen.</p>
        },
        {
            "questionNumber": 3,
            "classBigImage": styles.maskers_image,
            "classSmallImage": styles.hoofdoek,
            "width": 366,
            "height": 267,
            "image_src": "/assets/maskers.gif",
            "buttons": <div className={styles.buttons_text_three} ><TextArea onchanged={e => handleChange(e)} array={direction === 'left' ? arrayLeft : arrayRight} text={direction === 'left' ? textLeft : textRight} /><Button classWord={ButtonStyles.button_three} question={question} text="Dit is mijn mening" onClicked={textArea ? (e) => handleClick(e, direction) : handleNothing} /> </div>,
            "classContainer": styles.content_containerTrump,
            "text": <p className={styles.text}>Noteer hoe je staat tegenover de <span className={styles.highlight}>Vlaamse politiek</span> de dag van vandaag.</p>
        },
        {
            "questionNumber": progress,
            "classBigImage": styles.car_image,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/auto.png",
            "width": 505,
            "height": 160,
            "button1": "Eens",
            "button2": "Oneens",
            "buttons": <div className={styles.buttons}><Button classWord={ButtonStyles.button} replace={direction == 'right' ? true : false} Xposition={direction == 'right' ? Xposition : 'auto'} Yposition={direction == 'right' ? Yposition : 'auto'} question={question} text="Eens" onClicked={(e) => handleClick(e, "left")} /> <Button replace={direction == 'left' ? true : false} classWord={ButtonStyles.button} Xposition={direction == 'left' ? Xposition : 'auto'} Yposition={direction == 'left' ? Yposition : 'auto'} question={question} text="Oneens" onClicked={(e) => handleClick(e, "right")} /></div>,
            "classContainer": styles.content_container_car,
            "text": <p className={styles.text}>De meest <span className={styles.highlight}>vervuilende auto's</span> moeten in verschillende steden en overal <span className={styles.highlight}>verboden</span> worden.</p>,
        },
        {
            "questionNumber": 5,
            "classBigImage": styles.haanLeeuw,
            "classSmallImage": styles.hoofdoek,
            "image_src": "/assets/haanLeeuw.png",
            "width": 251,
            "height": 189,
            "buttons": <div className={styles.buttons}><ButtonTwo classWord={direction === 'left' ? ButtonStyles.button_check : ButtonStyles.button_wrong} question={question} text="Liever niet" /> <ButtonTwo classWord={direction === 'left' ? ButtonStyles.button_wrong : ButtonStyles.button_check}  text="yes, please"/></div>,
            "classContainer": styles.content_container,
            "text": <p className={styles.text}>België moet gesplitst worden door middel van een muur tussen Vlaanderen en Walonië.</p>,
        },

    ]

    useEffect(() => {
        if (question == 3) {
            const timer = setInterval(() => {
                setProgress(Math.floor(Math.random() * 5) + 2)
            }, 500);
            return () => clearInterval(timer);
        }

        if (question == 4) {
           const timerTwo = setInterval(() => {
                setglitch(styles.glitch);
                setTiming(timing - 1000)

                timer.current = setTimeout(() => {
                    setglitch(styles.display_none);
                }, 400)

               return () => {
                   clearTimeout(timer.current);
               }

            }, timing);
            return () => clearInterval(timerTwo);
        }    
    });

    useEffect(() => {
        if (question == 2) {
            timer.current = setTimeout(() => {
                setisOpen(false)
            }, 5000);

            timer.current = setTimeout(() => {
                setglitch(styles.glitch)
            }, 5100);

            timer.current = setTimeout(() => {
                setglitch(styles.display_none)
            }, 5500);
        }

        if(question == 4){
            timer.current = setTimeout(() => {
                setisOpenTwo(true)
            }, 5000);

            timer.current = setTimeout(() => {
                router.push('/finish')
            }, 10000);
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


    return (
        <>
            {close && <ClosePopup onClicked={handleClickCrossClose} />}
            <Metadata />
            <section onMouseMove={question == 3 ? handleMouseMove : handleNothing} className={styles.container}>
                <div className={styles.background}></div>
                <div className={glitch}><Image src="/assets/glitch.gif" alt="glitch" layout='fill' /> </div>
                <Versiering />
                {question == 2 ? <div className={styles.maskers_image}></div> : ''}
                <div className={questions[question].classBigImage}></div>
                <div className={styles.content}>
                    <Progress value={questions[question].questionNumber} onClicked={handleClickCross} />
                    <div className={questions[question].classContainer}>
                        {question == 1 && <img className={trump} src="/assets/trump.png"></img>}
                        <div className={questions[question].classSmallImage}><Image src={questions[question].image_src} width={questions[question].width} height={questions[question].height}/></div>
                        <div className={styles.buttons_text}>
                            {isOpen && <Popup text={direction === "left" ? popupTextLeft : popupTextRight} />}
                            {isOpenTwo && <ComputerPopup text={direction === "left" ? ComputerpopupTextLeft : ComputerpopupTextRight} />}
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

