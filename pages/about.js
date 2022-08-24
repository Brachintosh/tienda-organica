import Head from 'next/head';
import PageLayout from '../components/PageLayout';

export default function About () {

    return <>
      <PageLayout>

        {/* ABOUT HEADER APP */}
        <Head>
            <title>Sobre nosotros</title>
            <link rel="icon" href="/bio2.png" />
        </Head>

        <div className='container'>
          <h2>
              About Us:
          </h2>
          <p>loremn ipsum dolorem coneutisur, loremn ipsum dolorem coneutisur, loremn ipsum dolorem coneutisur</p>
        </div>
        
        <style jsx>{`
          .container {
            height: 100vh;
            background-image: url("https://d1di2lzuh97fh2.cloudfront.net/files/2c/2cf/2cfa9l.jpg?ph=65935a34dc");
            display: grid;
            justify-content: center;
          }
          h2 {
            margin-top: 2rem;
          }
        `}
        </style>

      </PageLayout>
    </>
};