import { FC, useEffect, useState } from 'react'
import styles from './Person.module.css'
import { TPerson, TPhotoResponse } from '../../../types'

interface IProps {
  person: TPerson
}

const API_URL_IMAGE = 'https://jsonplaceholder.typicode.com/photos'

export const Person: FC<IProps> = ({ person }) => {
  const { name, email, phone, id } = person

  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    fetch(`${API_URL_IMAGE}/${id}`)
      .then((response) => response.json())
      .then((data: TPhotoResponse) => {
        setImageURL(data.url)
      })
  }, [id])

  return (
    <div className={styles.personCard}>
      <img src={imageURL} alt="selfie" />
      <hr />
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <p>{`Hello, my name is ${name}! i want to work with you!`}</p>
    </div>
  )
}
