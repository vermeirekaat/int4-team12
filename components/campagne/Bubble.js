import Metadata from "../Metadata";
import styles from "./Bubble.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Bubble ({ input }) {
    
    return (
          <section className={styles.container}>
          <div className={styles.background}></div>
          <Metadata/>

          <article className={styles.finish}>
              <div className={styles.finish_image}></div>
              <div className={styles.finish_content}>
                  <h1 className={styles.title}>{input.title}</h1>
                  <p className={styles.paragraaf}>{input.partOne}<br/><br/>{input.partTwo}</p>

                  <Link href="/campagne">
                      <a className={styles.button}>Meer informatie</a>
                  </Link>
              </div>

              <div className={styles.share}>
                  <p className={styles.share_tagline}>Share with your friends</p>
                  <div className={styles.share_image}>
                      <Image 
                          src="/assets/campagne/socials.png"
                          alt="Social Media Logo"
                          width={221}
                          height={51}
                      />
                  </div>
              </div>
          </article>
      </section>
    )
}