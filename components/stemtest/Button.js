import styles from './Button.module.css'

export default function Button({ text, onClicked, classWord , question, Xposition, Yposition }) {

    const handleMouseOver = (e) => {

      if(question == 3){ 
            console.log(e.currentTarget)
          e.currentTarget.style.cssText = `position:absolute; left:${Xposition - 420}px; top: ${Yposition - 420}px;`;
        }
    }


    console.log(classWord)

    return (
        <button onMouseOver={e => handleMouseOver(e)} className={classWord} value={text} onClick={onClicked} >{text}</button>
    );
}