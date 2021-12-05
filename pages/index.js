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
        <div className={styles.landing}>
          <div>
            <Image 
              src="/images/logo.png" 
              alt="atomhacks logo"
              height={500}
              width={500}
            >
            </Image>
          </div>
          <div className={styles.content}>
            <h1>AtomHacks</h1>
          </div>
        </div>
      </div>
    </>
  )
}
