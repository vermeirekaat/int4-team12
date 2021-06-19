import styles from "./Start.module.css";
import Metadata from "../../components/Metadata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";



export default function Stemtest() {
    const router = useRouter();

    const handleRangeInput = (e) => {
        if (e.target.value === "100") {
            router.push('/stemtest');
        }
    }

    return (
        <>
            <Metadata />
            <article className={styles.container}>
                <div className={styles.title_container}>
                    <motion.p className={styles.title_stroke}
                    initial={{ y: "-3rem", opacity: 0}}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease:"easeInOut", duration: .5}}
                    >Stemtest
                    </motion.p>
                    <motion.p className={styles.title_stroke}
                    initial={{ y: "-3rem", opacity: 0}}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease:"easeInOut", duration: .5}}>Stemtest
                    </motion.p>
                    <motion.h1 className={styles.title_fill}
                    initial={{ y: "-7rem", opacity: 0}}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease:"easeInOut", duration: .7 , delay: .2 }}>Stemtest
                    </motion.h1>
                </div>
                <p className={styles.intro_first}>In welke mate ben jij akkoord met bepaalde standpunten van politieke partijen?</p>
                <p className={styles.intro_second}>Ben je zeker dat je alle correcte informatie hebt om kritische keuzes te maken?</p>

                <motion.div className={styles.input_desktop}
                    /*initial={{ y: "-.5rem", opacity: 0, scale: .8}}
                    animate={{ y: 0, opacity: 1, scale: 1.2 }}
                    transition={{ ease:"easeIn", duration: .5, delay: 1.5 }}*/
                >
                    <Link href="/stemtest">
                        <a className={styles.button}> Click to get started</a>
                    </Link>
                </motion.div>

                <div className={styles.images}>
                    <motion.div className={styles.image_left}
                        initial={{ x: "-20rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ ease: "easeIn", duration: .7, delay: .7 }}
                    >
                    </motion.div>
                    <motion.div className={styles.image_right}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1}}
                        transition={{ ease: "easeIn", duration: .7, delay: 1.5 }}>
                        <Image
                            src="/assets/circles.png"
                            alt="Protest"
                            width={357}
                            height={598} />
                    </motion.div>
                </div>

                <div className={styles.input_mobile}>
                    <p className={styles.instruction}>Slide to get started</p>
                    <input className={styles.range} onChange={(e) => handleRangeInput(e)} type="range" defaultValue="0"></input>
                </div>

                <div className={styles.image_extra}></div>
                <motion.div className={styles.image_double}
                    initial={{ x: "-1rem", y: "-1rem" }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ ease: "easeOut", duration: .5, delay: .5 }}
                    ></motion.div>
                <motion.div className={styles.image_triple}
                    initial={{ x: "-2rem", y: "-2rem" }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ ease: "easeOut", duration: .5, delay: .5 }}
                    ></motion.div>
            </article>
        </>
    )
}