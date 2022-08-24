import PageLayout from '../components/PageLayout';
import Link from "next/link";

export default function About () {

    return <>
      <PageLayout title="Sobre Nostoros" icon="/bio2.png" >
      <div className='container'>
          <h2>
              Sobre Nosotros
          </h2>
          <div className='inner'>
            <div className='contentAboutUs'>
              <h3>Filosofía detrás de la naturaleza</h3>
              <p>
              Nuestra misión es ofrecer de manera accesible la alimentación mas sana y natural que nos da nuestra tierra.
              Es un consumo conscientemente ecológico, donde se conoce, controla y garantiza el proceso de producción.
              Fomentamos a nutrir nuestra tierra, fuente de alimentación eterna.
              Bienvenidos a AlmaZen.<br/><br/>
              <Link href='/contactUs'>
                ¿Querés sumarte a nuestro proyecto?
              </Link>
              </p>
            </div>
          </div>
        </div> 
        <style jsx>{`
          .container {
            margin: 0;
            padding: 0;
            display: block;
            height: 100vh;
            background-color: #fafafa;
          }
          .inner {
            height: 80%;
            background-image: url("https://d1di2lzuh97fh2.cloudfront.net/files/2c/2cf/2cfa9l.jpg?ph=65935a34dc");
            background-size: 40vw 100%;
            background-position: right;
          }
          .contentAboutUs {
            padding: .75em 1em;
            width: 55vw;
          }
          h2 {
            background-color: #fafafa;
            display: flex;
            justify-content: center;
            align-self: center;
            margin: 0;
            margin-top: .25em;
            width: 35vw;
            color: green;
            font-size: 2.5em;
          }
          h3, p { 
            color: #343434;
            text-shadow: 2px 1.5px #fafafa;
          }
        `}
        </style>

      </PageLayout>
    </>
};