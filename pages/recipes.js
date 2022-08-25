import PageLayout from '../components/PageLayout';
import Image from 'next/image';

const Recetas = ({ results }) => {
  return (
    <>
      <PageLayout title="Recetas - Tienda Orgánica" icon='/logoTiendaOrg.png'>

        <div className='recipesContainer'>
          <h1>RECETAS:</h1>
         
          { results.length === 0 && <p>Loading....</p>}
          { results.length > 0 && 
            results.map((item, index) => (
              <div key={index} className="recipeCard">
                <h5>- {item.title}</h5>
                <Image 
                    alt="Imagen de recetas"
                    src={item.image}
                    layout="responsive"
                    height={2} width={4}
                />
              </div>
            ))
          }
        </div>

      </PageLayout>

      <style jx>
        {`
          .recipesContainer {
            padding: 0;
            margin: 0;
            background-color: #eeee;
          }
          h1{
            margin: 0;
            padding: .5em 1.5em;
            color: #343434;
            font-weight: 900;
          }
          h5 {
           margin-left: 3em; 
           color: #343434;
          }
          .recipeCard {
            display: grid;
            grid-template-columns: 1fr .75fr;
            grid-gap: 0.5em 1em;
            align-items: center;

            margin-top: 3em;
            padding-bottom: 1.2em;
            width: 90%;
          }
        `}
      </style>
    </>
  );
};

export default Recetas;

export async function getStaticProps() {
  const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=salad&apiKey=f1b761ba8bc34f97922269dcc563b6d6")

  const { results } = await response.json();

  return {
    props: {
      results
    }
  }
}