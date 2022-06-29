import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p className='attribution'>Background photo by Andrea Piacquadio from Pexels</p>
            <p>built and maintained by <a href='https://github.com/loganamollo'>Wayne Logan</a></p>
            <p>&copy; {new Date().getFullYear()} Jaindi Kisero</p>
        </footer>
    )
}

