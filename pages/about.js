import PageLayout from '../components/PageLayout';
import Link from "next/link";
import Image from 'next/image';
import imagenDesk from "/public/AlmaZenLogo.png"
import canasta from "/public/canasta.avif"
// import canasta from "/public/A.jpg"

export default function About () {

    return <>
      <PageLayout title="Sobre Nostoros" icon="/bio2.png" >
        <div className='container'>
          <h2>
              Sobre Nosotros
          </h2>

          <div className='contentAboutUs'>
            
            <div className='contentAboutUs-right'>
              <Image 
                alt="Imagen de verduras"
                src={imagenDesk}
                layout="responsive"
                height="2em" width="3em"
              />
            </div>
            
            <div className='contentAboutUs-left'>
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

          <div className='imagen-canasto'>
            <Image 
                  alt="Imagen de verduras"
                  src={canasta}
                  layout="responsive"
                  height={0.5} width={1}
            />
          </div>
        </div> 

        <style jsx>{`
          .container {
            margin: 0;
            padding: 0;
            display: block;

            background-color: #fa2;
          }

          .contentAboutUs {
            display: flex;
            justify-items: center;
            padding: .75em 1em;

          }
          .contentAboutUs-left {
            width: 50vw;
            margin-left: 2em;
          }
          .contentAboutUs-right {
            width: 35vw;
            margin: 1em 2em;
          }

          .imagen-canasto {
            display: grid;
            align-items: center;
            margin-top: 1em;
            padding: 0;

          }

          h2 {
            background-color: #FFF;
            display: flex;
            justify-content: center;
            align-self: center;
            margin: 0;
            margin-top: .25em;
            width: 35vw;
            color: green;
            font-size: 2.5em;
            text-shadow: 2px 1.5px #343434;
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