import Head from "next/head";
import Image from "next/image";
import styles from "./Header.module.css";
import Contact from "./Contact"

export default function Header({ user, onClick}) {

    return (
        <>
        <Head>
            <title>Stemtest - Unfiltered</title>
            <meta name="description" content="In welke mate ben jij akkoord met bepaalde standpunten van politieke partijen?"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>

            <div className={styles.header} onClick={onClick}>
            <div className={styles.headerImage}>
               <Image
                    src="/assets/facebook-logo.svg"
                    alt="Facebook Logo"
                    width={50}
                    height={50}
               />
            </div>
                <Contact user={user} />
        </div>
        </>
    )
}