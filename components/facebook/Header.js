import Head from "next/head";
import Image from "next/image";
import styles from "./Header.module.css";
import Metadata from "./../Metadata";
import Contact from "./Contact"

export default function Header({ user, onClicked}) {

    return (
        <>
        <Metadata/>
            <div className={styles.header} onClick={onClicked}>
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