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



  console.log(articles);



  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.feed}>
        <Article article={articles[1]}/> 
        <Advertisement/> 
        {/* <Article/> 
        <Article/> 
        <Article/> 
        <Advertisement/>
        <Article/> */}
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const result = await fetch (`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=30a0127e58ec47d3bb8bb12e997b277b`); 
  const data = await result.json();

  if (data) {
    return {
      props: {
        data,
      },
    }
  }
}
