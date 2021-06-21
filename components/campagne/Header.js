import styles from "./Header.module.css";
import Image from "next/image";

export default function Footer () {

    return (
        <section className={styles.header}>
            <h2 className={styles.headline}>
                        You are what you <span>click</span>
                    </h2>
                    <div className={styles.introduction}>
                        <div className={styles.window_green}></div>
                        <p className={styles.paragraaf}>
                            Je spendeert talloze minuten op sociale media (Facebook, Instagram...) waarbij honderden berichten jouw aandacht vragen. Maar op welke manier wordt er beslist welke berichten JIJ te zien krijgt? <br /> <br /> Het zijn je eigen clicks die bepalen welke berichten er op je feed terecht komen.
                        </p>
                    </div>
                    <div className={styles.image_protest}>
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
                    </div>
        </section>
    )
}