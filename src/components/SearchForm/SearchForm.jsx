import styles from './SearchForm.module.css'

export default function SearchForm({onSubmit}) {
  return (
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <input type="search" placeholder='Type the topic here' name='search' />
      <button>Search</button>
    </form>
  )
}