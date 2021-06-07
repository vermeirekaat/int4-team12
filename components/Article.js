import Image from "next/image";
import styles from "./Article.module.css";

export default function Article () {

    return (
        <article className={styles.article}>
            <section className={styles.profile}>
                <div className={styles.profileImage}>
                    <Image
                        src="/assets/ine.png"
                        alt="Profile picture - Ine"
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.information}>
                    <h3 className={styles.profileName}>Ignorant Inge</h3>
                    <p className={styles.time}>23min.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.articleImage}>
                    {/* <Image/> */}
                </div>
                <h2 className={styles.articleTitle}>Fake News Headline</h2>
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