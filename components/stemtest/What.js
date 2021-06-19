import styles from './What.module.css';

export default function What (){
    
    const handleMouseOver = (e) => {
       e.currentTarget.innerHTML = "Niet gevreesd u bent niet gehackt, deze test stuurt u binnen een bepaalde richting"
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.innerHTML = "Wat is dit?"
    }


    return (
        <p onClick={e => handleMouseOver(e)} onMouseOver={e => handleMouseOver(e)} onBlur={e => handleMouseLeave(e)} onMouseLeave={e => handleMouseLeave(e)} className={styles.what}>Wat is dit?</p>
    )
}