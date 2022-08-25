import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function PageLayout ({ children, title = "Tienda Loka", icon = "/AlmaZenLogo.png" }) {
  
  return (
   <>
    {/* DEFAULT HEADER APP */} 
    <Head>
      <title>{title}</title>
      <meta name="description" content="Developed by brachintosh - Next.js" />
      <link rel="icon" href={icon} />
    </Head>

    {/* NAVIGATION BAR */}
    <header style={{display: 'flex', justifyItems: 'flex-start', justifyContent:'space-around', alignContent: 'center', border: 'solid #343434 1px', hieght: '30px', padding: '20px',}} >
      <Link href='/'>
        Tienda Orgánica  
      </Link>
      <Link href='/about'>
        Sobre Nosotros  
      </Link>
      <Link href='/contactUs'>
        Contacto 
      </Link>
    </header>

    {/* BODY */}
    <main>
      {children}
    </main>

    {/* FOOTER */}
    <footer className={styles.footerBrand} style={{hieght: '30px', padding: '20px'}}>
      <span>
        Website created using: 
        <a
          className={styles.dev}
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
        {" "}Next.js
        </a>{" - "}
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