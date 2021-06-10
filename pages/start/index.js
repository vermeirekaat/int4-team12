import styles from "./Start.module.css";
import Metadata from "../../components/Metadata";
import Image from "next/image";
import Link from "next/link";

export default function Stemtest () {

    return (
        <>
        <Metadata/>
        <article className={styles.container}>
            <div className={styles.title_container}>
                <p className={styles.title_stroke}>Stemtest</p>
                <p className={styles.title_stroke}>Stemtest</p>
                <p className={styles.title_stroke}>Stemtest</p>
                <h1 className={styles.title_fill}>Stemtest</h1>
            </div>
            <p className={styles.intro_first}>In welke mate ben jij akkoord met bepaalde standpunten van politieke partijen?</p>
            <p className={styles.intro_second}>Ben je zeker dat je alle correcte informatie hebt om kritische keuzes te maken?</p>

            <div className={styles.input_desktop}>
                <Link href="/stemtest">
                    <a className={styles.button}> Click to get started</a>
                </Link>
            </div>

            <div className={styles.images}>
                <div className={styles.image_left}>
                    {/*<Image
                        src="/assets/protest.png"
                        alt="Protest"
                        layout="fill"/>*/}
                </div>
                <div className={styles.image_right}>
                    <Image
                        src="/assets/circles.png"
                        alt="Protest"
                        width={357}
                        height={598}/>
            </div>
            </div>

            <div className={styles.input_mobile}>
                <p className={styles.instruction}>Slide to get started</p>
                <input className={styles.range} type="range" defaultValue="0"></input> 
            </div>

            <div className={styles.image_extra}></div>
            <div className={styles.image_double}></div>
            <div className={styles.image_triple}></div>
        </article>
        </>     
    )
}