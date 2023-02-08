import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1><i className="orange">Fully</i> customisable single page websites, for <b className="magic">free.</b></h1>
      <a href="https://discord.com/">Read more.</a>
    </div>
  )
}
