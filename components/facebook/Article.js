import Image from "next/image";
import styles from "./Article.module.css";

export default function Article ({ article }) {

    return (
        <article className={styles.article}>
            <section className={styles.profile}>
                <div className={styles.profileImage}>
                    <Image
                        src="/assets/bbc.png"
                        alt="Profile picture - Ine"
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.information}>
                    <h3 className={styles.profileName}>{article.author}</h3>
                    <p className={styles.time}>23min.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.articleImage}>
                    <img
                        src={article.urlToImage}
                        width={500}
                        height={300} 
                    />
                </div>
                <h2 className={styles.articleTitle}>{article.title}</h2>
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