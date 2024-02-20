import { FC } from 'react'
import styles from './Button.module.css'

interface TButton {
  children: React.ReactNode
}

export const Button: FC<TButton> = ({ children }) => {
  return <button className={styles.headerButton}>{children}</button>
}
