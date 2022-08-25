import Image from 'next/image';
// import logoTiendaOrganica from "/public/AlmaZenLogo.png"
import tomateCherry from "/public/tomateCherry.avif"
import verdus from "/public/verdus.jpeg"
import tabla from "/public/tabla.jpeg"
import PageLayout from '../components/PageLayout';

const contactUs = () => {
  return (
    <>
      <PageLayout title="Contactános" icon='/logoTiendaOrg.png'>
        <div className='container'>

          {/* DESCRIPTION INFO */}
          <div className="right">
            <div className='inner'>
              <h2>
                Contactanos
              </h2>
              <h4>Dir.: Olazábal 2670, Belgrano, CABA, Argentina.</h4>
              <h4>[imagen del mapa]</h4>
              <h5>Te.: +54 9 11 3878-3077</h5>
              <h5>Mail: contacto@tiendaorganica.com.ar</h5>
              <h5>FB: https://www.facebook.com/almazenorganico/</h5>
              <h5>IG: https://www.instagram.com/#almazentiendaorganica</h5>
              
              <div className="contactForm">
                <span>FORMULARIO DE CONTACTO...</span>
                <span>INGRESE NOMBRE...</span>
                <span>INGRESE SU EMAIL...</span>
                <span>INGRESE SU MENSAJE...</span>
                <span>FORMULARIO DE CONTACTO...</span>
              </div>
                  
            </div>
          </div>  

          {/* next.js image */}
          <div className="left">
            <Image 
              alt="Imagen de verduras"
              src={tomateCherry}
              layout="responsive"
              height="2em" width="3em"
            />

            <Image 
              alt="Imagen de verduras"
              // src={logoTiendaOrganica}
              src={tabla}
              layout="responsive"
              height="2em" width="3em"
            />

            <Image 
              alt="Imagen de verduras"
              src={verdus}
              layout="responsive"
              height="2em" width="3em"
            />
          </div>

        </div>
      </PageLayout>

      <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0;
            padding: 0;
            height: 100%;
          }
          .inner {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-items: center;
          }

          .left {
            width: 35vw;
            margin: 1em 2em;
          }
          .right {
            margin: 0;
            padding: 1em 2em;
            height: 100%;
            width: 60vw;
          }

          .contactForm { 
            display: grid;
            justify-self: center;
            width: 75%;
            padding: .5em 1em;
            margin-bottom: 2em;
          }

          h2 {
            color: tomato;
            text-shadow: 2px 1.5px #343434;
            font-size: 2.5em;
          }
          h5 {
            color: #fa3;
            text-shadow: 1px .75px #343434;
            letter-spacing: 1.25px;
            font-size: 1.25em;
          }
        `}
      </style>

    </>
  )
}

export default contactUs;
