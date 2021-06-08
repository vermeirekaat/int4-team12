import Header from "../components/Header";
import Article from "../components/Article";
import Advertisement from "../components/Advertisement";
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  const articles = [];

  const mapItems = (data) => {
    data.articles.map((article) => {
      return articles.push(article);
    })
  }
  
  mapItems(data);

  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.feed}>
        <Article article={articles[1]}/> 
        <Advertisement/> 
        <Article article={articles[2]}/> 
        <Article article={articles[3]}/> 
        <Article article={articles[4]}/> 
        <Advertisement/>
        <Article article={articles[5]}/>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const result = await fetch (`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`); 
  const data = await result.json();

  if (data) {
    return {
      props: {
        data,
      },
    }
  }
}
