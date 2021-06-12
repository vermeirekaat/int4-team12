import styles from './ButtonPurple.module.css'

export default function Button({ text}) {

    return (
        <button className={styles.button} value={text} >{text}</button>
    );
}