import styles from './Header.module.css'
import logo from '../images/android-chrome-512x512.png'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      {}
    </div>
  )
}
