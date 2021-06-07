import Head from "next/head";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header () {

    return (
        <>
        <Head>
            <title>Stemtest - Unfiltered</title>
            <meta name="description" content="In welke mate ben jij akkoord met bepaalde standpunten van politieke partijen?"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.header}>
            <div className={styles.headerImage}>
               <Image
                    src="/assets/facebook-logo.svg"
                    alt="Facebook Logo"
                    width={50}
                    height={50}
               />
            </div>

            <div className={styles.user}>
                <div className={styles.userPicture}>
                <Image
                    className="userPic"
                    src="/assets/sander.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                />
                </div>

                <div className={styles.userName}>
                    <p className={styles.name}>Suspicious Sander <span>&#10095;</span></p>
                </div>
               
            </div>

        </div>
        </>
    )
}