import styles from "./Tips.module.css";
import Image from "next/image";

export default function Tips () {

    return (

        <section className={styles.tips}>
            <div className={styles.tips_subtitles}>
                <h2 className={styles.subtitle_green}>Pop your Bubble</h2>
                <p className={styles.subtitle_outline}>Pop your Bubble</p>
                <p className={styles.subtitle_outline}>Pop your Bubble</p>
            </div>

            <article className={styles.tips_grid}>
                <div className={styles.tips_header}>
                    <div className={styles.tips_image}>
                        <Image
                            src="/assets/campagne/ad-blocker.png"
                            alt="Ad Blocker"
                            layout="fill"
                        />
                    </div>
                    <p className={styles.tips_number}>1</p>
                </div>
                <div className={styles.tips_content}>
                    <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Say yes to ad-blockers</h3>
                        <p className={styles.tips_paragraaf}>Installeer een ad-block extensie op jouw computer zodat je minder blootgesteld wordt aan online advertenties.</p>
                    </div>
            </article>

            <article className={styles.tips_grid}>
                <div className={styles.tips_header}>
                    <p className={styles.tips_number}>2</p>
                        <div className={styles.tips_image}>
                            <Image
                                src="/assets/campagne/anonymous.png"
                                alt="Anonymous"
                                layout="fill"
                            />
                        </div>
                </div>
                <div className={styles.tips_contentSecond}>
                    <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Browse anonymous</h3>
                        <p className={styles.tips_paragraaf}>Hello unknown! <br />Als het internet niet weet wie je bent, kan het jouw gegevens ook niet opslaan.</p>
                    </div>
            </article>

            <article className={styles.tips_grid}>
                <div className={styles.tips_header}>
                    <div className={styles.tips_image}>
                        <Image
                            src="/assets/campagne/cookies.png"
                            alt="Cookie Monster"
                            layout="fill"
                        />
                    </div>
                    <p className={styles.tips_number}>3</p>
                </div>
                <div className={styles.tips_content}>
                    <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Delete those cookies</h3>
                        <p className={styles.tips_paragraaf}>Cookies klinken misschien positief maar dat zijn ze niet. Cookies verzamelen data zonder dat je er vat op hebt. Weg ermee!</p>
                    </div>
            </article>

        </section>

    )
}