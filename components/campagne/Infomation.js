import styles from "./Information.module.css";
import Image from "next/image";

export default function Information () {

    return (
        <section className={styles.information}>
                    <div className={styles.intermezzo}>
                        <div className={styles.intermezzo_content}>
                            <div className={styles.search}>
                                <Image
                                    src="/assets/campagne/search.svg"
                                    alt="Search icon"
                                    width={20}
                                    height={20}
                                />

                                <h2 className={styles.search_title}>Filter bubble</h2>

                            </div>
                            <p className={styles.definition}>"Verzameling van specifieke informatie die afgestemd is op het online gedrag van de gebruiker."</p>
                        </div>
                        <div className={styles.circles}></div>
                    </div>

                    <div className={styles.awareness}>
                        <div className={styles.awareness_bg}>
                            <h2 className={styles.awareness_subtitle}>Be aware of your bubble</h2>
                        </div>

                        <div className={styles.awareness_flex}>
                            <div className={styles.awareness_image}>
                                <Image
                                    src="/assets/campagne/awareness.png"
                                    alt="Filter bubble"
                                    layout="fill"
                                />
                            </div>
                            <p className={styles.awareness_content}>De filter bubble is te vergelijken met een spiegelpaleis. Je bent omringd door berichten en mensen die hetzelfde denken als jij. Maar dit zorgt ook voor "blind spots" aangezien je niet geconfronteerd wordt met tegenstrijdige ideeën. <br /> <br /> Je begeeft je in je eigen online wereld waar je geen controle hebt op de informatie die je krijgt. Dit zorgt ervoor dat je verschillende perspectieven mist en zelf niet kritisch omgaat met het raadplegen van nieuwsbronnen. <br /> Niemand is evenveel geïnformeerd waardoor er afwijkende ideeën ontstaan op vlak van politiek. De politieke wereld zal nog meer polariseren, een bedreiging voor de democratie.</p>
                        </div>
                    </div>
                </section>
    )
}