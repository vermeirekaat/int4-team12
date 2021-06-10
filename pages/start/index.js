import styles from "./Stemtest.module.css";

export default function Stemtest () {

    return (
        <article className={styles.introduction}>
            <h1 className={styles.title}>STEMTEST</h1>
            <p className={styles.intro_bold}>In welke mate ben jij akkoord met bepaalde standpunten van politieke partijen?</p>
            <p className={styles.intro_light}>Ben je zeker dat je alle correcte informatie hebt om kritische keuzes te maken?</p>

            <div className={styles.input}>
                <input className={styles.range} type="range"></input>
            </div>
        </article>
        
    )
}