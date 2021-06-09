import Header from "../components/Header";
import Article from "../components/Article";
import Advertisement from "../components/Advertisement";
import styles from '../styles/Home.module.css'
import User from '../components/User'

export default function Home({ data, persons }) {
  const articles = [];
  const personsArray = [];

  const mapItems = (element1, array) => {
    element1.map((article) => {
      return array.push(article);
    })
  }


  mapItems(data.articles, articles);
  mapItems(persons.results, personsArray);

  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.feed}>
        <Article article={articles[1]} />
        <Advertisement />
        <Article article={articles[2]} />
        <Article article={articles[3]} />
        <Article article={articles[4]} />
        <Advertisement />
        <Article article={articles[5]} />
      </section>
      <section className={styles.names}>
        <h1 className={styles.title}>Contacts</h1>
        <User user={personsArray[0]} />
        <User user={personsArray[1]} />
        <User user={personsArray[2]} />
        <User user={personsArray[3]} />
        <User user={personsArray[4]} />
        <User user={personsArray[5]} />
      </section>

    </div>
  )
}

export async function getStaticProps() {
  const result = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`);
  const data = await result.json();
  const resultTwo = await fetch(`https://randomuser.me/api/?results=50`);
  const persons = await resultTwo.json();

  if (data) {
    return {
      props: {
        data, persons
      },
    }
  }
}


