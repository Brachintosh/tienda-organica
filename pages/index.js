import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Tienda Orgánica</title>
        <meta name="description" content="Developed by brachintosh - Next.js" />
        <link rel="icon" href="/bio2.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bien venidos a <a href="https://nextjs.org">tienda organica!</a>
        </h1>
        <p className={styles.description}>
          Website created using Next.js{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <span>
          Developed by {" "}
          <a 
            className={styles.dev}
            href="https://github.com/Brachintosh/"  
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              brachintosh
            </b>
          </a>
        </span>
      </footer>

    </div>
  );
};
