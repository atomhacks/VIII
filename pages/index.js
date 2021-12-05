import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/pages/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Atomhacks</title>
      </Head>
    
      <div className={styles.container}>
        <h1>AHHHHHHHHHHHHHHHHHHHHHHHHHHHHtom Hacks :)</h1>
      </div>
    </>
  )
}
