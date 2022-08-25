import PageLayout from '../components/PageLayout';
import Image from 'next/image';
import bolson from  "/public/bolson.webp"

const Bolson = () => {
  return (
    <>
      <PageLayout title="Pedí tu Bolson - Tienda Orgánica" icon='/save-the-planet.png'>

      <div className='bolsonContainer'>
        <h1>Reservá tu pedido</h1>
        <p>Te confirmaremos la reserva a la brevedad.</p>
        <h4>Calidad garantizada</h4>
        <p>[SOY LA FOTO DE CALIDAD]</p>
        <span>Todos nuestros vegetales orgánicos y agroecológicos están analizados por el SENASA. Se realizaron estudios bacteriológicos y de pesticidas, brindando las garantías necesarias para consumir con tranquilidad los alimentos, libres de agrotóxicos y sabrosos.</span>
        <br/><br/>
        <Image 
          alt="Imagen de recetas"
          src={bolson}
          layout="responsive"
          height={6} width={12}
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
