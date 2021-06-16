import styles from './Button.module.css'

export default function Button({ text, onClicked, classWord , Xposition, Yposition, replace }) {

    const handleMouseOver = (e) => {

        console.log(replace)

      if(replace){ 
          e.currentTarget.style.cssText = `position:absolute; left:${Xposition - 420}px; top: ${Yposition - 420}px;`;
        } else {
          e.currentTarget.style.cssText = '';
        }
    }


    console.log(classWord)

    return (
        <button onMouseOver={e => handleMouseOver(e)} className={classWord} value={text} onClick={onClicked} >{text}</button>
    );
}