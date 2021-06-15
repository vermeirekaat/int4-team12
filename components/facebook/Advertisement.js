import Image from "next/image";
import Link from "next/link";
import styles from "./Advertisement.module.css";
import ReactPlayer from "react-player";
import { useState } from "react";

export default function Advertisement () {

    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <article className={styles.advertisement}>
        <section className={styles.profile}>
            <div className={styles.profileImage}>
                <Image
                    src="/assets/facebook-logo.svg"
                    alt="Facebook Logo"
                    width={70}
                    height={70}
                />
            </div>
            <div className={styles.information}>
                <h3 className={styles.profileName}>Stemtest</h3>
                <p className={styles.time}>Sponsored</p>
            </div>
        </section>

        <section className={styles.content}>
            <div className={styles.articleImage}>
                <ReactPlayer 
                    url="video/advertisement.mp4"
                    width={350}
                    height={200}
                    playing={ isPlaying }
                    loop={ true }
                    muted={ true }/>
                {/* <Image
                    src="/assets/stemtest.png"
                    width={500}
                    height={300}
                />
                <p className={styles.play}> <span>&#9654;</span></p>*/}
            </div>
            <div className={styles.tagline}>
                <h2 className={styles.articleTitle}>Verkiezingen 2024</h2>
                <Link href="/start">
                    <a className={styles.button}>Doe de test</a>
                </Link>
            </div>
            
        </section>

        <div className={styles.reaction}>
            <ul className={styles.interactions}>
                <li className={styles.input}>Like</li>
                <li className={styles.input}>Comment</li>
                <li className={styles.input}>Share</li>
            </ul>
        </div> 

    </article>
    )
}