import styles from './Header.module.css'
import logo from '../images/android-chrome-512x512.png'
import { Button } from './components/Button'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <Button>Главная</Button>
      <Button>По имени</Button>
      <Button>По номеру</Button>
    </div>
  )
}
