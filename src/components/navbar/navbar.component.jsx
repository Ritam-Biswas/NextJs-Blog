import Link from 'next/link'

import styles from './styles.module.css'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo_container}>
        <h3>LOGO</h3>
      </div>
      <div className={styles.links}>
        <ul>
            <li><Link href='/'>Homepage</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='#'>Contact</Link></li>
            <li><Link href='#'>Blog</Link></li>
            <li><Link href='#'>Admin</Link></li>
            <button className={styles.btn}>Login</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
