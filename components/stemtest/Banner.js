import styles from './Banner.module.css';

export default function Bander() {
    return (
        <div className={styles.scroll_wrapper}>
            <div className={styles.marquee}>
                <p className={styles.scroll}>Tip: om een passend resultaat te verkrijgen, is het belangrijk om de vragen grondig te lezen.</p>
                <p className={styles.scroll}>Tip: om een passend resultaat te verkrijgen, is het belangrijk om de vragen grondig te lezen.</p>
            </div>
        </div>
    )
}