import styles from './What.module.css';
import Link from 'next/link';

export default function What (){
    return (
        <Link href={{ pathname: `/campagne`, query: { knows: 'false' } }}>
        <a className={styles.what}>Wat is dit?</a>
        </Link>
    )
}