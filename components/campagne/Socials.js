import Image from "next/image";
import ReactTooltip from 'react-tooltip';
import { useState, useEffect } from "react";

export default function Socials({ url, className }) {

    const [isTooltipVisible, setTooltipVisibility] = useState(false);
    const [ToolTip, setToolTip] = useState("kopiëer naar plakbord");

    useEffect(() => {
        setTooltipVisibility(true);
    }, []);

    const copyToClipboard = async (value) => {
        try {
            await navigator.clipboard.writeText(value);
            setToolTip("gekopieerd naar plakbord")   
        } catch (err) {
            setToolTip("Niet gelukt")
           
        }
    }

    const handleClicked = (e) => {
        copyToClipboard(url);
    }


    return (
        <div data-for='getContent' onMouseLeave={() => setToolTip("kopiëer naar plakbord")} data-tip className={className} onClick={e => handleClicked(e)}>
            <Image
                src="/assets/campagne/socials.png"
                alt="Social Media Logo"
                width={221}
                height={51}
            />
            {isTooltipVisible && <ReactTooltip  id='getContent' getContent={() => ToolTip}/>}
        </div>
    )
}