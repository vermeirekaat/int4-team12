import styles from './Button.module.css'

export default function Button({ text, onClicked }) {
    return (
        <button className={styles.button} value={text} onClick={onClicked} >{text}</button>
    );
}