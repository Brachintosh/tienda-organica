import Head from 'next/head';
import NavBar from './NavBar';
import FooterBrand from './FooterBrand';
import { Box } from '@mui/material';

export default function PageLayout({ children, title = "Tienda Loka", icon = "/AlmaZenLogo.png" }) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Developed by brachintosh - Next.js" />
        <link rel="icon" href={icon} />
      </Head>
      <NavBar />
      {/* BODY */}
      <main>
        {children}
      </main>
      <FooterBrand />
      {/* <footer className={styles.footerBrand} style={{hieght: '30px', padding: '20px'}}>
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
    </footer> */}

    </>
  )
};