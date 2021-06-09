import Header from "../components/Header";
import Article from "../components/Article";
import Advertisement from "../components/Advertisement";
import styles from '../styles/Home.module.css';
import Contact from '../components/Contact';
import { useState } from "react";


export default function Home({ data, persons }) {
  const articles = [];
  const personsArray = [];

  const user = [
    {
      "name": {
        "first": "Suspicious",
        "last": "Sander"
      },

      "picture": {
        "medium": "/assets/sander.png"
      },
    },
    {
      "name": {
        "first": "Ignorant",
        "last": "Ine"
      },

      "picture": {
        "medium": "/assets/ine.png"
      },
    }
  ]

  const [persona, setPersona] = useState(user[0]);

  const mapItems = (element1, array) => {
    element1.map((article) => {
      return array.push(article);
    })
  }


  const handleClick = () => {
    console.log("click")
    if (persona.name.last === "Sander"){
      setPersona(user[1])
    }
    
    if (persona.name.last === "Ine") {
      setPersona(user[0])
    }
  }

  mapItems(data.articles, articles);
  mapItems(persons.results, personsArray);

  return (
    <>
      <Header user={persona} onClick={handleClick} />
      <div className={styles.container}>

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
          <Contact user={personsArray[0]} />
          <Contact user={personsArray[1]} />
          <Contact user={personsArray[2]} />
          <Contact user={personsArray[3]} />
          <Contact user={personsArray[4]} />
          <Contact user={personsArray[5]} />
        </section>
        <section className={styles.side_elements}>
          <Contact user={persona} />
          <ul>
            <li>
              Friends
            </li>
            <li>
              Groups
            </li>
            <li>
              Events
            </li>
            <li>
              Pages
            </li>
          </ul>
        </section>

      </div>
    </>
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


