import styles from "./Header.module.css";
import Image from "next/image";

export default function Footer () {

    return (
        <section className={styles.header}>
             <h2 className={styles.hidden}>Campagne - Filter Bubbles</h2>
                <div className={styles.header_title}>
                    <p className={styles.warning}>Warning</p>
                    <p className={styles.headline}>Dit was geen echte stemtest</p>
                </div>
               
           
                    <div className={styles.introduction}>
                        <div className={styles.window_green}></div>
                        <p className={styles.paragraaf}>
                            De stemtest die je zonet heb ingevuld, was niet echt.<br /> <br /> Dit heb je misschien zelf gemerkt, toen je geen controle meer had over je antwoorden. Geen paniek, dit was juist de bedoeling.<br/><br/>Hiermee wordt de invloed van een filter bubble geïllustreerd.
                        </p>
                    </div>
                    <div className={styles.rectOne}></div>
                    <div className={styles.rectTwo}></div>
                    {/*<div className={styles.image_protest}>
                        <Image
                            src="/assets/campagne/protest.png"
                            alt="Protest"
                            layout="fill"
                        />
                    </div>
                    <div className={styles.image_phone}>
                        <div className={styles.window_green}></div>
                        <Image
                            src="/assets/campagne/phone.png"
                            alt="Phone with emoticons"
                            layout="fill"
                        />
                    </div>*/}
        </section>
    )
}