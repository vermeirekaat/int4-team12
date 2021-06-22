import styles from "./Tips.module.css";
import { motion } from "framer-motion";

export default function Tips ({ scaleAni, firstAni, secondAni, thirdAni }) {

    return (

        <section className={styles.tips}>
            <motion.div className={styles.tips_subtitles}
                style={{ scale: scaleAni }}
            >
                <h2 className={styles.subtitle_green}>Pop your Bubble</h2>
                <p className={styles.subtitle_outline}>Pop your Bubble</p>
                <p className={styles.subtitle_outline}>Pop your Bubble</p>
            </motion.div>

            <motion.article className={styles.tips_grid}
                style={{ x: firstAni }}
            >
                <div className={styles.tips_header}>
                    <div className={styles.ad_image}></div>
                    <p className={styles.tips_number}>1</p>
                </div>
                <div className={styles.tips_content}>
                    <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Say yes to ad-blockers</h3>
                        <p className={styles.tips_paragraaf}>Installeer een ad-block extensie op jouw computer zodat je minder blootgesteld wordt aan online advertenties.</p>
                    </div>
            </motion.article>

            <motion.article className={styles.tips_grid}
                style={{ x: secondAni }}
            >
                <div className={styles.tips_header}>
                    <p className={styles.tips_number}>2</p>
                        <div className={styles.anonymous_image}></div>
                </div>
                <div className={styles.tips_contentSecond}>
                    <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Browse anonymous</h3>
                        <p className={styles.tips_paragraaf}>Hello unknown! <br />Als het internet niet weet wie je bent, kan het jouw gegevens ook niet opslaan.</p>
                    </div>
            </motion.article>

            <motion.article className={styles.tips_grid}
                style={{ x: thirdAni }}
            >
                <div className={styles.tips_header}>
                    <div className={styles.cookie_image}></div>
                    <p className={styles.tips_number}>3</p>
                </div>
                <div className={styles.tips_content}>
                    <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Delete those cookies</h3>
                        <p className={styles.tips_paragraaf}>Cookies klinken misschien positief maar dat zijn ze niet. Cookies verzamelen data zonder dat je er vat op hebt. Weg ermee!</p>
                    </div>
            </motion.article>

        </section>

    )
}