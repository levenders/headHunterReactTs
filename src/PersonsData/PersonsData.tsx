import { useState, useEffect } from 'react'
import styles from './PersonsData.module.css'
import { Person } from './components/Person'
import { TPerson, TPersonResponse } from '../types'
import { sortPersons, formatPersonResponse } from '../helpers'

const API_URL_USERS = 'https://jsonplaceholder.typicode.com/users'

export const PersonsData: React.FC = () => {
  const [persons, setPersons] = useState<TPerson[]>([])

  const [sortedPersons, setSortedPersons] = useState<TPerson[]>(persons)

  const handleSortClick = (sortBy: 'name' | 'phone' | 'id') => {
    const newArray = sortPersons({ persons, by: sortBy })
    setSortedPersons(newArray)
  }

  useEffect(() => {
    fetch(API_URL_USERS)
      .then((result) => result.json())
      .then((data: TPersonResponse[]) => {
        const formatedPersons = data.map((person) =>
          formatPersonResponse(person)
        )
        setPersons(formatedPersons)
      })
  }, [])

  useEffect(() => {
    setSortedPersons(persons)
  }, [persons])

  return (
    <div>
      <div className={styles.sortButtonContainer}>
        <h3>Сортировать:</h3>
        <button
          className={`${styles.sortButton} ${styles.active}`}
          type="button"
          onClick={() => handleSortClick('id')}
        >
          По порядку
        </button>
        <button
          className={styles.sortButton}
          type="button"
          onClick={() => handleSortClick('name')}
        >
          По имени
        </button>
        <button
          className={styles.sortButton}
          type="button"
          onClick={() => handleSortClick('phone')}
        >
          По номеру
        </button>
      </div>
      <div className={styles.container}>
        {sortedPersons.map((item) => {
          return <Person key={item.id} person={item} />
        })}
      </div>
    </div>
  )
}
