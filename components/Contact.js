import styles from "./Contact.module.css";
import Image from "next/image";

export default function User({ user, onClicked }) {
    return (
        <div className={styles.profile}>

            {user.name.last === "Sander" || user.name.last === "Ine" ?<Image className={styles.profile_picture} src={user.picture.medium} width={50} height={50}/>: <img className={styles.profile_picture} src={user.picture.medium}></img>}
            <p className={styles.username}>{user.name.first} {user.name.last}</p>
        </div>
    );
}