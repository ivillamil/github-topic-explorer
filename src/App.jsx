import React from 'react'
import { useEffect, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import * as queries from './constants/queries'
import styles from './App.module.css'
import SearchForm from './components/SearchForm'
import TopicsList from './components/TopicsList'

const DEFAULT_TOPIC = 'react'

export default function App() {
  const [topic, setTopic] = useState(DEFAULT_TOPIC)
  const [getTopics, {data, loading}] = useLazyQuery(queries.TOPICS_QUERY, {
    variables: { topic, limit: 10 }
  })

  const handleSelected = (topic) => { setTopic(topic) }

  useEffect(() => {
    getTopics()
  }, [topic])

  return (
    <main className={styles.Container}>
      <div className={styles.App}>
        <header className={styles.Header}>
          <h1 className={styles.Title}>Github Topic Explorer</h1>
          <SearchForm onSearch={handleSelected} />
        </header>
        <section className={styles.Results}>
          <h2 className={styles.MetaInfo}>
            Showing related topics for:
            <strong> {topic} </strong>(stars: {data?.topic?.stargazerCount})
          </h2>
          <TopicsList
            onSelected={handleSelected}
            topics={data?.topic?.relatedTopics}
          />
          {loading && (
            <p>Loading...</p>
          )}
        </section>
      </div>
    </main>
  )
}
