import styles from './ClosePopup.module.css';
import Button from './ButtonPurple';
import { useState } from "react";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ClosePopup({ onClicked}) {
    const [mouses, setMouses] = useState([]);

    const mouse = (e) => {

        const x = e.clientX - 400;
        const y = e.clientY - 300;

       let mouse = React.createElement(
            "img", {
            src: "./assets/campagne/pijl.png",
            className: "mouse",
            style: {position: "absolute", left:`${x}px`, top:`${y}px`},
            key: uuidv4()
        })

        setMouses(mouses.concat(mouse));

    }

    return (
        <>
            <div className={styles.close_container} onMouseMove={e => mouse(e)}>
                <div className={styles.box}>
                    <span onClick={onClicked} className={styles.close}></span>
                    <p className={styles.text}>U gaat akkoord met de stelling, volgens de computer.</p>
                    <Button text="Undo" />
                    {mouses}
                </div>
            </div>
            <div className={styles.full_page}></div>
        </>
    )
}