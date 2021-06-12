import styles from './Button.module.css'

export default function Button({ text, onClicked, classWord , question}) {

    const word = classWord;
    console.log(question)

    return (
        <button className={question == 1 ? word === "disable" ? styles.disable : styles.button : question == 2 ? styles.button_three: styles.button} value={text} onClick={onClicked} >{text}</button>
    );
}