import React, {useState} from 'react'
import styles from './SearchForm.module.css'

export default function SearchForm({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = function(e) {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = function(e) {
    e.preventDefault()
    if(searchTerm <= 2) return
    onSearch && onSearch(searchTerm)
    setSearchTerm('')
  }

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder='Type the topic here'
        name='search'
        data-testid='search-input'
        onChange={handleChange}
        value={searchTerm}
      />
      <button data-testid='search-button'>Search</button>
    </form>
  )
}