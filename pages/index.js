import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <PageLayout >
        <div className={styles.container}>

          {/* CUSTOM HEDEAR PER PAGE */}
          <Head>
            <title>Tienda Orgánica - Inicio</title>
            <meta name="description" content="Developed by brachintosh - Next.js" />
            <link rel="icon" href="/AlmaZenLogo.png" />
          </Head>

          {/* BODY CONTENT */}
          <main className={styles.main}>
            <h1 className={styles.title}>
              Bienvenidos a <a href="https://www.tiendaorganica.com.ar">AlmaZen Tienda Orgánica!</a>
            </h1>
            <p className={styles.description}>
              Website created using Next.js{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>
          </main>    

        </div>
      </PageLayout>
    </>
  );
};
