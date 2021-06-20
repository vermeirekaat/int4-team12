import styles from "./Socials.module.css";
import Image from "next/image";

export default function Socials ({url}) {
    
    const copyToClipboard = async (value) => {
        try {
            await navigator.clipboard.writeText(value);
            alert('Text copied to clipboard');
        } catch (err) {
            alert('Copying failed: ', err);
        }
    }

    const handleClicked = () => {
        copyToClipboard(url);
    }


    return (
        <div className={styles.footer_socials} onClick={handleClicked}>
            <Image
                src="/assets/campagne/socials.png"
                alt="Social Media Logo"
                width={221}
                height={51}
            />
        </div>
    )
}