import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { signInWithGoogle } from '../config/firebase'

export default function Navbar(){
    const [user, setUser] = useState({
        name: '',
        email: '',
        photoURL: ''
      })
    
    const signIn = () => {
    signInWithGoogle()
    .then( (result) => {
        const name = result.user.displayName
        const email = result.user.email
        const photoURL = result.user.photoURL

        setUser({ name, email, photoURL })
        console.log(user)
    })
    .catch( (error) => {
        console.log(error)
    })
    }

    return(
        <nav className={styles.navbar}>
            <div>
                <Link href='/'>
                    <a>JJ</a>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href='business'>
                        <a>Business</a>
                    </Link>
                </li>
                <li>
                    <Link href='finance'>
                        <a>Finance</a>
                    </Link>
                </li>
                <li>
                    <Link href='government'>
                        <a>Government</a>
                    </Link>
                </li>
                <li>
                    <Link href='politics'>
                        <a>Politics</a>
                    </Link>
                </li>
                <li>
                    <button className={styles.login} onClick={signIn}>
                        <Image 
                        src={ user.name ? user.photoURL : '/google-icon.png'} 
                        alt='login'
                        height={35} width={35}
                        />
                    </button>
                </li>
            </ul>
        </nav>
    )
}