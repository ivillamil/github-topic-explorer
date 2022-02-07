import styles from './TopicsList.module.css'

export default function TopicsList({onSelected, topics}) {

  const handleSelected = (topic) => () => onSelected(topic)

  return (topics && topics.length > 0) ? (
    <ul className={styles.List}>
      {topics.map(topic => (
        <li className={styles.Item} key={topic.id} onClick={handleSelected(topic.name)}>
          <h3 className={styles.ItemTitle}>{topic.name}</h3>
          <p>stars: {topic.stargazerCount}</p>
        </li>
      ))}
    </ul>
  ) : null
}