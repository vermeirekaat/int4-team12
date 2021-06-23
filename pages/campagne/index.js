import Metadata from "../../components/Metadata";
import Bubble from "../../components/campagne/Bubble";
import Header from "../../components/campagne/Header";
import Purple from "../../components/campagne/Purple";
import Information from "../../components/campagne/Infomation";
import Examples from "../../components/campagne/Examples";
import Tips from "../../components/campagne/Tips";
import Footer from "../../components/campagne/Footer";
import styles from "./Campagne.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTransform, useViewportScroll } from "framer-motion";

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

    const { scrollYProgress } = useViewportScroll();

    const animations = {
        opacityHeader: {
            desktop: useTransform(scrollYProgress, [0, .15], [1, 0]), 
            mobile: useTransform(scrollYProgress, [0, .2], [1, 1])
        },
        positionHeader: {
            desktop: useTransform(scrollYProgress, [0, .15], [0, -200]),
            mobile: useTransform(scrollYProgress, [0, .1], [0, 50])
        },
        scalePurple: {
            desktop: useTransform(scrollYProgress, [0, .15], [.5, 1]),
            mobile: useTransform(scrollYProgress, [0, .15], [.5, 1])
        },
        opacityInformation: {
            desktop: useTransform(scrollYProgress, [0, .45], [0, 1]),
            mobile: useTransform(scrollYProgress, [0, .35], [0, 1])
        },
        positionInformation: {
            desktop: useTransform(scrollYProgress, [0, .45], [-300, 0]),
            mobile: useTransform(scrollYProgress, [0, .35], [-150, 0])
        },
        animateTrump: {
            desktop: useTransform(scrollYProgress, [0, .5], [-1000, 0]),
            mobile: useTransform(scrollYProgress, [0, .45], [500, 0])
        }, 
        animateBoris: {
            desktop: useTransform(scrollYProgress, [0, .5], [1000, 0]),
            mobile: useTransform(scrollYProgress, [0, .55], [500, 0])
        },
        scaleTips: {
            desktop: useTransform(scrollYProgress, [0, .8], [.25, 1]),
            mobile: useTransform(scrollYProgress, [0, .75], [.25, 1])
        },
        positionFirst: {
            desktop: useTransform(scrollYProgress, [0, .9], [-1000, 0]),
            mobile: useTransform(scrollYProgress, [0, .75], [-500, 0])
        },
        positionSecond: {
            desktop: useTransform(scrollYProgress, [0, .95], [1000, 0]), 
            mobile: useTransform(scrollYProgress, [0, .85], [500, 0])
        },
        positionThird: {
            desktop: useTransform(scrollYProgress, [0, 1], [-1000, 0]),
            mobile: useTransform(scrollYProgress, [0, .95], [-500, 0])
        },
        opacityFooter: {
            desktop: useTransform(scrollYProgress, [0, 1], [0, 1]),
            mobile: useTransform(scrollYProgress, [0, 1], [0, 1])
        },
        scaleFooter: {
            desktop: useTransform(scrollYProgress, [0, 1], [.5, 1]),
            mobile: useTransform(scrollYProgress, [0, 1], [.5, 1])
        }

    }
    const checkScreenWidth = ( object ) => {
        if (typeof window !== "undefined") {
            const screenWidth = window.screen.width;
            let newAnimations;

            if (screenWidth <= 627) {
                newAnimations = object.mobile;
            }
            if (screenWidth >= 627) {
                newAnimations = object.desktop; 
            }
            return newAnimations;
        }
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

            <Header opacityAni={checkScreenWidth(animations.opacityHeader)} positionAni={checkScreenWidth(animations.positionHeader)}/>
            <Purple scaleAni={checkScreenWidth(animations.scalePurple)}/>
            <Information opacityAni={checkScreenWidth(animations.opacityInformation)} positionAni={checkScreenWidth(animations.positionInformation)}/>
            <Examples trumpAni={checkScreenWidth(animations.animateTrump)} borisAni={checkScreenWidth(animations.animateBoris)}/>
            <Tips scaleAni={checkScreenWidth(animations.scaleTips)} firstAni={checkScreenWidth(animations.positionFirst)} secondAni={checkScreenWidth(animations.positionSecond)}
            thirdAni={checkScreenWidth(animations.positionThird)}/>
            <Footer scaleAni={checkScreenWidth(animations.scaleFooter)}  opacityAni={checkScreenWidth(animations.opacityFooter)} url={shareUrl}/>
        </article>
    )
}