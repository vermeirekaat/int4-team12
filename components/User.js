import styles from "./User.module.css";

export default function User({ user }) {
    return (
        <div className={styles.profile}>
            <img className={styles.profile_picture} src={user.picture.medium}></img>
            <p className={styles.username}>{user.name.first} {user.name.last}</p>
        </div>
    );
}