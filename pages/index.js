import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.jsでPDF出力させるサンプルアプリ
        </h1>
        <Link href="/react-pdf-sample">
          <h2>👉<span style={{color: 'blue'}}>React PDFのSample</span></h2>
        </Link>
      </main>
    </div>
  )
}
