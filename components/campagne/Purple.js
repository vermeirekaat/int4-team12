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
                            <p className={styles.paragraaf_white}>
                                Op basis van je eerste antwoord werd je in een bepaalde richting gestuurd. Op sociale media (zoals Facebook) is dit ook het geval. De berichten die je te zien krijgt, zijn gebaseerd op je voorbije gedrag. Zo kan slechts één 'like' je hele Facebook feed bepalen. Je komt terecht in een online filter bubble.
                            </p>
                            <p className={styles.highlight}>"You are what you click"</p>
                        </div>
                    </div>
        </section>
    )
}