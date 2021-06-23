import styles from "./Examples.module.css";
import { motion } from "framer-motion";

export default function Examples ({ trumpAni, borisAni }) {

    return (
        <section className={styles.examples}>              
            <h2 className={styles.hidden}>Real Life Bubbles (gone wrong)</h2>

            <div className={styles.scroll_wrapper}>
                <div className={styles.marquee}>
                    <p className={styles.scroll}>Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong)</p>
                    <p className={styles.scroll}>Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong)</p>
                </div>
            </div>

            <div className={styles.examples_flex}>
                <motion.article className={styles.trump}
                    style={{ x: trumpAni }}
                >
                    <div className={styles.example_header}>
                        <h3 className={styles.trump_title}> Verkiezingen Trump 2016</h3>
                        <div className={styles.trump_image}>
                        </div>
                    </div>
                    <div className={styles.trump_content}>
                        <p className={styles.example_paragraaf}>Niemand had verwacht dat Trump de nieuwe president zou worden in 2016, en toch werd dit realiteit. <br/> <br/>De verklaring hiervoor is 'Trumpism' waarbij Trump-aanhangers online gesteund werden in hun opninies. <br />Door de filter bubble kregen ze geen andere perspectieven te zien waardoor ze enkel extremer gingen denken - en uiteindelijk ook stemmen.</p>
                    </div>
                </motion.article>

                <motion.article className={styles.boris} 
                    style={{ x: borisAni }}
                >
                    <div className={styles.example_header}>
                        <h3 className={styles.boris_title}> Brexit Referendum 2016</h3>
                        <div className={styles.boris_image}>
                        </div>
                    </div>
                    <div className={styles.boris_content}>
                        <p className={styles.example_paragraaf}>In 2016 was de kogel door de kerk, Engeland zal de EU verlaten.<br /> <br />Twee kampen streden tegen elkaar: Pro-Leavers en Con-Leavers. <br />Wat bleek, de eerste groep zag online enkel campagnes die hun mening versterkten: de EU verlaten. Geen enkel bericht met een tegenstrijdige mening. Allemaal te wijten aan de online filter bubble.</p>
                    </div>
                </motion.article>
            </div>

            <div className={styles.scroll_wrapper}>
                <div className={styles.marquee}>
                    <p className={styles.scroll}>Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong)</p>
                    <p className={styles.scroll}>Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong)</p>
                </div>
            </div>
            
        </section>
    )
}