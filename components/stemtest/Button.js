import { PositionalAudio } from '@react-three/drei';
import styles from './Button.module.css'

export default function Button({ text, onClicked, classWord , question, Xposition, Yposition}) {

    const word = classWord;

    return (
        <button style={question == 3 ? { left: `${Xposition - 420}px`, top: `${Yposition - 400}px`, position: 'absolute' } : { } } className={question == 1 ? word === "disable" ? styles.disable : styles.button : question == 2 ? styles.button_three : styles.button} value={text} onClick={onClicked} >{text}</button>
    );
}