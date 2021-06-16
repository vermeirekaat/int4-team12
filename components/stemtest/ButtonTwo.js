import styles from './Button.module.css'

export default function Button({ text, onClicked, classWord }) {


    return (
        <button className={classWord} value={text} onClick={onClicked} >{text}</button>
    );
}