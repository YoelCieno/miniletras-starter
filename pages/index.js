import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/footer/Footer'
import Row from '@components/row/Row'

function Home() {

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
            [1, 3].map(num => {
              return (
                <div className="row" key={num}>
                  <Row row={num} />
                </div>
              )
            })
          }
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home;
