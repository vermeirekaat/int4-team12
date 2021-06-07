import Header from "../components/Header";
import Article from "../components/Article";
import Advertisement from "../components/Advertisement";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.feed}>
        <Article/> 
        <Advertisement/> 
      </div>

    </div>
  )
}
