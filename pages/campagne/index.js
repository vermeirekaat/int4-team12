import Metadata from "../../components/Metadata";
import Bubble from "../../components/campagne/Bubble";
// import Content from "../../components/campagne/Content";
import Header from "../../components/campagne/Header";
import Purple from "../../components/campagne/Purple";
import Information from "../../components/campagne/Infomation";
import Examples from "../../components/campagne/Examples";
import Tips from "../../components/campagne/Tips";
import styles from "./Campagne.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Mobile from "../../components/campagne/Mobile";

export default function Campagne () {

    const [link, setLink] = useState();

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setLink(router.query.knows);
            return () => setLink(router);
        }
    });

    const shareUrl = `${process.env.NEXT_PUBLIC_URL}/start`;


    const content = {
        title: "Proficiat !", 
        partOne: "Je hebt je niet in de val laten lokken door een filter bubble. Het is duidelijk dat je zeer alert bent op het internet. Zeer goed van je!",
        partTwo: "Kom nog meer te weten over filter bubbles en hoe je jezelf hier kan tegen wapenen online."
    }

    if (link === "true") {
        return (
            <Bubble input={content}/>
        )
    }

    return (
        <article className={styles.container}>
        <Metadata/>
            <h1 className={styles.hidden}>Filter Bubbles</h1>

            <Header/>
            <Purple/>
            <Information/>
            <Examples/>
            <Tips/>
        </article>
        /* <>
        <div className={styles.mobile}>
            <Mobile url={shareUrl}/>
        </div>

        <div className={styles.desktop}>
            <Content url={shareUrl}/>
        </div>
        
        </> */
    )
}