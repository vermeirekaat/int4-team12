import styles from './Versiering.module.css'
import Image from "next/image";

export default function Versiering () {
    return (
        <div>
            <div className={styles.versiering1}>
                <Image
                    src="/assets/versiering.png"
                    alt="Versieringen"
                    width={16}
                    height={23} />
            </div>
            <div className={styles.versiering2}>
                <Image
                    src="/assets/versiering 2.png"
                    alt="Versieringen"
                    width={19}
                    height={20} />
            </div>
            <div className={styles.versiering3}>
                <Image
                    src="/assets/versiering 3.png"
                    alt="Versieringen"
                    width={23}
                    height={24} />
            </div>
        </div>
    );
}