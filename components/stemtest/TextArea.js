import styles from './TextArea.module.css'
export default function TextArea ({array, text, onchanged, onBlured}) {

    let counter = 0;
    let textMaker = '';

    const handleInput = (e) => {
        if (counter < array.length) {
            textMaker = textMaker + array[counter];
            e.target.value = textMaker;
            counter++
        } else {
            e.target.value = text
        }

    }

    return (
        <>
            <textarea onChange={onchanged} onBlur={onBlured} className={styles.textarea} rows="2" cols="50" type="text" onInput={(e) =>handleInput(e)}></textarea>
        </>
    )
}