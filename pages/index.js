import styles from '../styles/Home.module.css'
export default function Home(){

  return(
    <div id='home' className={styles.home}>
      <h1 className='slide-left'>Jaindi&apos;s Journal</h1>
      <p className='slide-left'>Surprising facts, humorous punchlines and blunt truths. <br />
        What you need to know about your country, your leaders, your government and the companies you buy from.<br />
        Journalism done right
      </p>
      <div className='links slide-left'>
        <a className='button1' href="#">Top articles</a>
        <a className='button2' href="#">Browse topics</a>
      </div>
      <div className='carousel'>

      </div>
    </div>
  )
}