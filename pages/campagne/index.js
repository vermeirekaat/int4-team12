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
                </div>
                <div className={styles.introduction}>
                    <p className={styles.paragraaf}>
                        Je spendeert talloze minuten op sociale media (Facebook, Instagram...) waarbij honderden berichten jouw aandacht vragen. Maar op welke manier wordt er beslist welke berichten JIJ te zien krijgt? <br/> <br/> Het zijn je eigen kliks die bepalen welke berichten er op je feed terecht komen.
                    </p>
                </div>
                <div className={styles.image_protest}>
                    <Image
                        src="/assets/campagne/protest.png"
                        alt="Protest"
                        layout="intrinsic"
                        width={219}
                        height={197}
                    />
                </div>
                <div className={styles.image_phone}>
                    <Image
                        src="/assets/campagne/phone.png"
                        alt="Phone with emoticons"
                        width={199}
                        height={169}
                    /> 
                </div>
            </section>
        </article>
    )
}