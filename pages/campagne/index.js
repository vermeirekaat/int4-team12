import Metadata from "../../components/Metadata";
import styles from "./Campagne.module.css";
import Image from "next/image";

export default function Campagne () {
    return (
        <article className={styles.container}>
            <Metadata/>
            <h1 className={styles.hidden}>Filter Bubbles</h1>
            <section className={styles.header}>
                <h2 className={styles.headline}>"You are what you <span>click</span>"</h2>

                <div className={styles.arrow}>
                    <Image
                        src="/assets/campagne/pijl.png"
                        alt="Green computer mouse"
                        width={117}
                        height={122}
                        />
                    <div className={styles.trail}></div>
                </div>
                <div className={styles.introduction}>
                    <div className={styles.window_green}></div>
                    <p className={styles.paragraaf}>
                        Je spendeert talloze minuten op sociale media (Facebook, Instagram...) waarbij honderden berichten jouw aandacht vragen. Maar op welke manier wordt er beslist welke berichten JIJ te zien krijgt? <br/> <br/> Het zijn je eigen kliks die bepalen welke berichten er op je feed terecht komen.
                    </p>
                </div>
                <div className={styles.image_protest}>
                <div className={styles.window_green}></div>
                    <Image
                        src="/assets/campagne/protest.png"
                        alt="Protest"
                        layout="intrinsic"
                        width={219}
                        height={197}
                    />
                </div>
                <div className={styles.image_phone}>
                <div className={styles.window_green}></div>
                    <Image
                        src="/assets/campagne/phone.png"
                        alt="Phone with emoticons"
                        width={199}
                        height={169}
                    /> 
                </div>
            </section>

            <section className={styles.purple}>
                <div className={styles.window_purple}></div>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>"Dus ik heb zelf de controle in handen want het gaat over mijn gedrag?"</h2>
                    <p className={styles.highlight}>Neen,</p>
                    <p className={styles.paragraaf_white}>Dit is helaas niet het geval. De algoritmes zorgen ervoor dat deze kliks zodanig geanalyseerd worden waardoor je er als gebruiker geen controle meer over hebt. <br/> <br/> Het gaat hier over "extreme personalisatie", je ziet enkel berichten die jij leuk of interssant gaat vinden. Onbewust bevindt je je in je eigen onzichtbare filter bubble.</p>
                </div>     
            </section>
        </article>
    )
}