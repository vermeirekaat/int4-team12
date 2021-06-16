import styles from './Button.module.css'

export default function Button({ text, onClicked, classWord , question, Xposition, Yposition }) {


    console.log(classWord)

    return (
        <button style={question == 3 ? { left: `${Xposition - 420}px`, top: `${Yposition - 420}px`, position: 'absolute' } : { } } className={classWord} value={text} onClick={onClicked} >{text}</button>
    );
}