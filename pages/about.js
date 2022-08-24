import PageLayout from '../components/PageLayout';

export default function About () {

    return <>
      <PageLayout title="Sobre nostoros" icon="/bio2.png" >

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
            text-decoration: underline;
            padding-top: 1em;
          }
        `}
        </style>

      </PageLayout>
    </>
};