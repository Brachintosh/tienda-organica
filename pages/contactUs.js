import Link from "next/link";
import PageLayout from '../components/PageLayout';

const contactUs = () => {
  return (
    <>
      <PageLayout title="Contactános" icon="/bio2.png" >
        
        <div className='container'>
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

      </PageLayout>

      <style jsx>{`
          .container {
            margin: 0;
            padding: 0;
            height: 100%;
            // background: lightblue url("https://65935a34dc.clvaw-cdnwnd.com/624984cfd98f1dae0aaccc6b70735c0c/200000012-324bc324be/73181685_2459876080959075_1679591839214075904_n.jpg?ph=65935a34dc") no-repeat fixed center;
            background: #fafafa url("https://65935a34dc.clvaw-cdnwnd.com/624984cfd98f1dae0aaccc6b70735c0c/200000011-8c33f8c341/120928227_2755270131419667_4032085712111445600_o.jpg?ph=65935a34dc") no-repeat scroll left;
            background-size: 360px 100vh;
          }
          .inner {
            margin: 0;
            padding: 0;
            display: grid;
            justify-content: flex-end;
          }

          .contactForm { 
            border: solid gray 1px;
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
            color: #2ef;
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
