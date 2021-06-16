import Bubble from "../../components/campagne/Bubble";
import Content from "../../components/campagne/Content";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Campagne () {

    const [link, setLink] = useState();

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setLink(router.query.knows);
        }
    });

    const content = {
        title: "Proficiat!", 
        partOne: "Je hebt je niet in de val laten lokken door een filter bubble. Het is duidelijk dat je zeer alert bent op het internet. Zeer goed van je!",
        partTwo: "Kom nog meer te weten over filter bubbles en hoe je jezelf hier kan tegen wapenen online."
    }

    if (link === "true") {
        return (
            <Bubble input={content}/>
        )
    }

    return (
        <Content/>
    )
}