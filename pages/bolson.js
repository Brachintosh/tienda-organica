import PageLayout from '../components/PageLayout';
import Image from 'next/image';
import bolson from  "/public/bolson.webp"
import selloCalidad from "/public/selloCalidad.png"

const Bolson = () => {
  return (
    <>
      <PageLayout title="Pedí tu Bolson - Tienda Orgánica" icon='/save-the-planet.png'>
      <div className='bolsonContainer'>

      {/* PASAR ESTE DIV A UN COMP GENERICO QUE RECIBA CIERTAS PROPS PARA CADA USO */}
        <h1>Reservá tu pedido</h1>
        <p>Te confirmaremos la reserva a la brevedad.</p>
        <h4>Calidad garantizada</h4>

        <div className='quality'>
          <div className='imagenCalidad'>
            <Image 
              alt="Sello de calidad"
              src={selloCalidad}
              layout="responsive"
              quality={100}
              priority={true}
            />
          </div>

          <span className='quality-info'>Todos nuestros vegetales orgánicos y agroecológicos están analizados por el SENASA. Se realizaron estudios bacteriológicos y de pesticidas, brindando las garantías necesarias para consumir con tranquilidad los alimentos, libres de agrotóxicos y sabrosos.</span>
        </div>
        <br/><br/>
        
        {/* img BOLSON */}
        <Image 
          alt="Imagen de recetas"
          src={bolson}
          layout="responsive"
          height={6} width={12}
          quality={100}
        />
        <br/>
        <p>
          ¡ATENCIÓN! Este bolsón es semanal, hasta agotar stock. Nos pondremos en contacto para informarte el estado y la entrega del mismo.
        </p>
      
      </div>
      </PageLayout>

      <style jsx>
        {`
          h1 {
            text-shadow: 2px 1.5px orange;
          }
          p {
            color: #343434;
          }

          .imagenCalidad {
            margin-top: 1em;
            margin-left: 3rem;
            height: 12vh;
            width: 12vw;
          }

          .quality {
            border: solid red 1px;
            display: flex;
            justify-content: center:
            align-items: center;
          }

          .quality-info {
            line-height: 1.75em;
            padding: 1.5em 2em;
            margin-left: 3rem;
            width: 75%;
          }

          .bolsonContainer {
            margin: 0;
            padding: .5em 1.5em;
            color: #343434;
            background-color: #eeee;
          }
        `}
      </style>
    </>
  )
}

export default Bolson
