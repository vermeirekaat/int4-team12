import styles from "./Purple.module.css";
import Image from "next/image";

export default function Purple () {
    return (

        <section className={styles.purple}>
            <div className={styles.window_purple}></div>
                    <div className={styles.purple_flex}>
                        <div className={styles.purple_image}>
                            <Image
                                src="/assets/campagne/computer.png"
                                alt="Computer in suit"
                                layout="fill"
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.subtitle}>"Wat was er zojuist aan de hand?"</h2>
                            <p className={styles.highlight}>De stemtest die je zonet hebt ingevuld, was geen echte stemtest.</p>
                            <p className={styles.paragraaf_white}>Dit heb je misschien zelf gemerkt, toen je geen controle meer had over je antwoorden. Geen paniek, dit was juist de bedoeling. Hiermee wordt de invloed van een filter bubble geïllustreerd.<br/> <br/> Op basis van je eerste antwoord werd je in een bepaalde richting gestuurd. Op sociale media (zoals Facebook) is dit ook het geval. De berichten die je te zien krijgt, zijn gebaseerd op je voorbije gedrag. Zo kan slechts één 'like' je hele Facebook feed bepalen. Je komt terecht in een online filter bubble.</p>
                        </div>
                    </div>
        </section>
    )
}