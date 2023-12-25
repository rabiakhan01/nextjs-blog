import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import mehndi from '../public/images/mehndi.jpg';
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      </Head>

      <main>
      <p>Go to First Post</p>
      <Link href="/posts/first-post">First Post</Link>
      </main>

      <footer>
        
      </footer>

    
    </div>
  );
}
