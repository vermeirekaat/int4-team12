import styles from "./Footer.module.css";
import Socials from "./Socials";
import SocialsStyles from "./Socials.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer ({ url }) {

    return (
        <footer className={styles.footer}>
           <div className={styles.footer_cta}>
                    <h2 className={styles.footer_title}>Share with your friends</h2>
                    <Socials className={SocialsStyles.footer_socials} url={url} />
                </div>
                <div className={styles.footer_link}>
                    <Link href="/start">
                        <a className={styles.link}>Doe de stemtest opnieuw</a>
                    </Link>
                </div>
                <div className={styles.footer_info}>
                    <div className={styles.footer_image}>
                        <Image
                            src="/assets/campagne/overheid.png"
                            alt="Logo Vlaamse Overheid"
                            width={96}
                            height={44}
                        />
                    </div>
                    <div className={styles.footer_names}>
                        <p className={styles.names_content}>Integration 4</p>
                        <p className={styles.names_content}>Amber Aspeslagh, Eline Claeys, Kaat Vermeire</p>
                    </div>
                </div> 

        </footer>
    )
}