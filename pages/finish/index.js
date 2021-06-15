import Metadata from "../../components/Metadata";
import styles from "./Finish.module.css";
import Image from "next/image";

export default function Finish () {
    
    return (
        <section className={styles.container}>
            <div className={styles.background}></div>
            <Metadata/>

            <article className={styles.finish}>
                <div className={styles.finish_image}></div>
                <div className={styles.finish_content}>
                    <h1 className={styles.title}>Sorry to burst your bubble</h1>
                    <p className={styles.paragraaf}>Je zat vast in je eigen filter bubble waardoor je geen controle meer had over jouw antwoorden. Dit gebeurt in de online wereld elke dag. Ontdek wat je kan doen om zelf terug de controle te krijgen op jouw online gedrag.</p>
                    <p className={styles.button}>Meer informatie</p>
                </div>

                <div className={styles.share}>
                    <p className={styles.share_tagline}>Share with your friends</p>
                    <div className={styles.share_image}>
                        <Image 
                            src="/assets/campagne/socials.png"
                            alt="Social Media Logo"
                            width={221}
                            height={51}
                        />
                    </div>
                </div>
            </article>
        </section>
    )
}