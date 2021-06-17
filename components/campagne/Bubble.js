import Metadata from "../Metadata";
import styles from "./Bubble.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Bubble ({ input }) {
    
    return (
          <section className={styles.container}>
          <div className={styles.background}></div>
          <Metadata/>

          <article className={styles.finish}>
              <div className={styles.finish_image}></div>
              <div className={styles.finish_content}>
                  <motion.h1 className={styles.title}
                    initial={{ scale: .8, y: "-10rem", opacity: 0}}
                    animate={{ scale: 1.2, y: 0, opacity: 1}}
                    transition={{ ease: "easeOut", duration: 1 }}
                  >{input.title}</motion.h1>
                  < motion.p className={styles.paragraaf}
                    initial={{ y: "-5rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 1, delay: .5 }}
                  >{input.partOne}<br/><br/>{input.partTwo}</motion.p>

                  <Link href="/campagne">
                      <motion.a className={styles.button}
                         initial={{ y: "-5rem", opacity: 0 }}
                         animate={{ y: 0, opacity: 1}}
                         transition={{ ease: "easeInOut", duration: 1.5, delay: 1.5 }}
                      >Meer informatie</motion.a>
                  </Link>
              </div>

              <motion.div className={styles.share}
                initial={{ y: "20rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2, delay: 1.25 }}
              >
                  <p className={styles.share_tagline}>Share with your friends</p>
                  <div className={styles.share_image}>
                      <Image 
                          src="/assets/campagne/socials.png"
                          alt="Social Media Logo"
                          width={221}
                          height={51}
                      />
                  </div>
              </motion.div>
          </article>
      </section>
    )
}