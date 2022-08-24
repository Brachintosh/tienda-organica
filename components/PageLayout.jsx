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
    <header style={{hieght: '30px', padding: '20px', color: '#343434'}} >
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
    <footer style={{hieght: '30px', padding: '20px'}}>
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