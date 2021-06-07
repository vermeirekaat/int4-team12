import Image from "next/image";
import styles from "./Advertisement.module.css";

export default function Advertisement () {

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
                {/* <Image/> */}
                <p className={styles.play}> <span>&#9654;</span></p>
            </div>
            <h2 className={styles.articleTitle}>Verkiezingen 2024</h2>
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