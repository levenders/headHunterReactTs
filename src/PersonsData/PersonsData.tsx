import { useState, useEffect } from 'react'
import styles from './PersonsData.module.css'
import { Person } from './components/Person'

const API_URL_USERS = 'https://jsonplaceholder.typicode.com/users'
// const API_URL_IMAGE = 'https://jsonplaceholder.typicode.com/photos'

export const PersonsData: React.FC = () => {
  const [persons, setPersons] = useState([])

  // const byField = (field: string) => {
  //   return (a, b) =>
  //     a[field] > b[field] ? 1 : -1
  // }

  // const sortPersons = (key: string) => {
  //   persons.sort(byField(key))
  // }

  useEffect(() => {
    fetch(API_URL_USERS)
      .then((result) => result.json())
      .then((json) => setPersons(json))
  }, [])

  return (
    <div className={styles.container}>
      {persons.map((item) => {
        return <Person props={item} />
      })}
    </div>
  )
}
