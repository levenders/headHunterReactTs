import { useState, useEffect } from 'react'
import styles from './PersonsData.module.css'
import { Person } from './components/Person'

const API_URL_USERS = 'https://jsonplaceholder.typicode.com/users'
// const API_URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos'

export const PersonsData: React.FC = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    fetch(API_URL_USERS)
      .then((result) => result.json())
      .then((json) => setPersons(json))
  }, [])

  // const person: any = {
  //   id: 123,
  //   name: 'Антон Гургасов',
  //   email: 'antonkur@mail.ru',
  //   phone: '89993334477',
  //   img: 'https://via.placeholder.com/600/771796',
  // }

  return (
    <div className={styles.container}>
      {persons.map((item) => {
        return <Person props={item} />
      })}
    </div>
  )
}
