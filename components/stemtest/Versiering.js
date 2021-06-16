import styles from './Versiering.module.css'
import Image from "next/image";

export default function Versiering () {
    return (
        <div>
            {/* <img className={styles.versiering1} src="/assets/versiering.png" width={16} height={23} /> */}
            {/* <img className={styles.versiering2} src="/assets/versiering 2.png" width={19} height={20} /> */}
            {/* <img className={styles.versiering3} src="/assets/versiering 3.png" width={23} height={24} /> */}

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