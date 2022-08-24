import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function PageLayout ({ children }) {
  
  return (
   <>
    {/* DEFAULT HEADER APP */} 
    <Head>
      <title>AlmaZen - Tienda Orgánica</title>
      <meta name="description" content="Developed by brachintosh - Next.js" />
      <link rel="icon" href="/AlmaZenLogo.png" />
    </Head>

    {/* NAVIGATION BAR */}
    <header>
      <Link href='/'>
           Tienda Orgánica
      </Link>{" "}{"-  "}
      <Link href='/about'>
        Sobre nosotros
      </Link>
    </header>

    {/* BODY */}
    <main>
      {children}
    </main>

    {/* FOOTER */}
    <footer>
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

   </>   
  )
};