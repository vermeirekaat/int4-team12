import Metadata from "../../components/Metadata";
import styles from "./Positive.module.css";
import Image from "next/image";

export default function Positive () {
    return (
          <section className={styles.container}>
          <div className={styles.background}></div>
          <Metadata/>

          <article className={styles.finish}>
              <div className={styles.finish_image}></div>
              <div className={styles.finish_content}>
                  <h1 className={styles.title}>Proficiat!</h1>
                  <p className={styles.paragraaf}>Je hebt je niet in de val laten lokken door een filter bubble. Het is duidelijk dat je zeer alert bent op het internet. Zeer goed van je! <br/><br/> Scroll verder en kom alles te weten over filter bubbles en hoe je jezelf hier kan tegen wapenen online.</p>
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