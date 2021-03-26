import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>MiniLetras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Cocina tu cuento favorito" />
        <section className="grid-container">
          {
            [1, 2, 3, 4, 5, 6].map(fr => {
              const fractal = {
                typeText: isOdd(fr),
                src: `text ${fr}`,
                fr: fr
              };
              return <article key={fractal.fr} className="fraction"><Button fraction={fractal} /></article>
            })
          }
        </section>
      </main>

      <Footer />
    </div>
  )
}

function isOdd(n) {
   return Math.abs(n % 2) === 1;
}

export default Home;
