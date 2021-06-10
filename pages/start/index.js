import styles from "./Start.module.css";
import Image from "next/image";

export default function Stemtest () {

    return (
        <article className={styles.container}>
            <div className={styles.title_container}>
                <p className={styles.title_stroke}>Stemtest</p>
                <p className={styles.title_stroke}>Stemtest</p>
                <p className={styles.title_stroke}>Stemtest</p>
                <h1 className={styles.title_fill}>Stemtest</h1>
            </div>
            <p className={styles.intro_bold}>In welke mate ben jij akkoord met bepaalde standpunten van politieke partijen?</p>
            <p className={styles.intro_light}>Ben je zeker dat je alle correcte informatie hebt om kritische keuzes te maken?</p>

            <div className={styles.image}>
                <Image
                    src="/assets/protest.png"
                    alt="Protest"
                    width={350}
                    height={250}/>
            </div>

            <div className={styles.input}>
                <p className={styles.instruction}>Slide to get started</p>
                <input className={styles.range} type="range" defaultValue="0"></input> 
            </div>
        </article>
        
    )
}