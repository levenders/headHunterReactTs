import { FC } from 'react'
import styles from './Person.module.css'

type TPerson = {
  id: number
  name: string
  email: string
  phone: string
  img: string
}

interface TProps {
  props: TPerson
}

const img = 'https://via.placeholder.com/600/771796' //временный костыль

export const Person: FC<TProps> = ({ props }) => {
  const { name, email, phone } = props
  return (
    <div className={styles.personCard}>
      <img src={img} alt="selfie"></img>
      <hr />
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <p>{`Hello, my name is ${name}! i want to work with you!`}</p>
    </div>
  )
}
