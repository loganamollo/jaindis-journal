import Image from 'next/image'
import { useState } from 'react'
import { signInWithGoogle } from '../config/firebase'

export default function Home(){
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
    })
    .catch( (error) => {
      console.log(error)
    })
  }

  return(
    <>
    <button onClick={ signIn }>Sign in with Google</button>
    {
      user.name &&
      <>
      <h1>Hello {user.name}</h1>
      <h2>{user.email}</h2>
      <img src={user.photoURL} alt='profile picture' />
      </>
    }
    </>
  )
}