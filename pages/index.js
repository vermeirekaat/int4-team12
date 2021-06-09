import Header from "../components/Header";
import Article from "../components/Article";
import Advertisement from "../components/Advertisement";
import styles from '../styles/Home.module.css'
import Contacts from '../components/Contacts'

export default function Home({ data, persons }) {
  const articles = [];
  const personsArray = [];

  console.log(data)

  const mapItems = (element1, array) => {
    element1.map((article) => {
      return array.push(article);
    })
  }


  mapItems(data.articles, articles);
  mapItems(persons, personsArray);





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
      <Contacts persons={personsArray} />

    </div>
  )
}

export async function getStaticProps() {
  const result = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`);
  const data = await result.json();
  const resultTwo = await fetch(`http://fakeapi.jsonparseronline.com/users`);
  const persons = await resultTwo.json();

  if (data) {
    return {
      props: {
        data, persons
      },
    }
  }
}


