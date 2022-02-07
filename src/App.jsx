import { useEffect, useState } from 'react'
import {gql, useLazyQuery} from '@apollo/client'
import * as queries from './constants/queries'
import styles from './App.module.css'

const DEFAULT_TOPIC = 'react'

function App() {
  const [topic, setTopic] = useState(DEFAULT_TOPIC)
  const [getTopics, {data, loading}] = useLazyQuery(queries.TOPICS_QUERY, {
    variables: { topic, limit: 10 }
  })

  const handleItemSelected = (topic) => () => {
    setTopic(topic)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if(e.target['search'].value.length <= 2) return
    setTopic(e.target['search'].value)
    e.target.reset()
  }

  useEffect(() => {
    getTopics()
  }, [topic])

  return (
    <main className={styles.Container}>
      <div className={styles.App}>
        <header className={styles.Header}>
          <h1 className={styles.Title}>Github Topic Explorer</h1>
          <form className={styles.SearchForm} onSubmit={handleSearchSubmit}>
            <input type="search" placeholder='Type the topic here' name='search' />
            <button>Search</button>
          </form>
        </header>
        <section className={styles.Results}>
          <h2 className={styles.MetaInfo}>
            Showing related topics for:
            <strong> {topic} </strong>(stars: {data?.topic?.stargazerCount})
          </h2>
          {data && (
            <ul>
              {data.topic?.relatedTopics?.map(topic => (
                <li className={styles.Item} key={topic.id} onClick={handleItemSelected(topic.name)}>
                  <h3 className={styles.ItemTitle}>{topic.name}</h3>
                  <p>stars: {topic.stargazerCount}</p>
                </li>
              ))}
            </ul>
          )}
          {loading && (
            <p>Loading...</p>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
