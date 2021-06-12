import styles from './Button.module.css'

export default function Button({ text, onClicked, classWord , question}) {

    const word = classWord

    return (
        <button className={ question == 1 ? word === "disable" ? styles.disable : styles.button : styles.button} value={text} onClick={onClicked} >{text}</button>
    );
}