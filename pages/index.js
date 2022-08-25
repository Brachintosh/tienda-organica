import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <PageLayout title="Tienda Orgánica"  icon='/logoTiendaOrg.png'>
        <div className={styles.container}>

          {/* BODY CONTENT */}
          <main className={styles.homeContent}>
            
            <h1 className={styles.homeTitle}>
              Bienvenido a tú <a href="https://www.tiendaorganica.com.ar">Tienda Orgánica!</a>
            </h1>

          </main>    

        </div>
      </PageLayout>
    </>
  );
};
