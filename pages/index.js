import Head from 'next/head';
import Image from 'next/image';
import About from '@components/About';

import styles from '@styles/sections/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Atomhacks</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.landing}>
          <div className={styles.logoDiv}>
            <Image 
              src="/images/logo.png" 
              alt="atomhacks logo"
              height={500}
              width={500}
              className={styles.logo}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Atom Hacks</h1>
            <h1>Bronx Science's 12-hour Annual Hackathon!</h1>
            <h1>Coming soon!</h1>
            <button className={styles.btn}>
              <h2>Register!</h2>
            </button>
          </div>
        </div>
        <About />
      </div>
    </>
  )
}
