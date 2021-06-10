import styles from './Versiering.module.css'

export default function Versiering () {
    return (
        <div>
            <img className={styles.versiering1} src="/assets/versiering.png" width={16} height={23} />
            <img className={styles.versiering2} src="/assets/versiering 2.png" width={19} height={20} />
            <img className={styles.versiering3} src="/assets/versiering 3.png" width={23} height={24} />
        </div>
    );
}