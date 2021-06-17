import styles from './ClosePopup.module.css';
import Button from './ButtonPurple';
import { useState } from "react";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ComputerPopup({ onClicked, text}) {
    const [mouses, setMouses] = useState([]);

    const mouse = (e) => {

        const x = e.clientX - 420;
        const y = e.clientY - 350;

       let mouse = React.createElement(
            "img", {
            src: "./assets/mouse.png",
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
                    <p className={styles.text}>{text}</p>
                    <Button text="Undo" />
                    {mouses}
                </div>
            </div>
            <div className={styles.full_page}></div>
        </>
    )
}