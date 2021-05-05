import Head from 'next/head'
import Header from '@components/Header'
import Row from '@components/row/Row'

function Home() {

  return (
    <div className="container">
      <Head>
        <title>MiniLetras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Sentimientos encontrados" />
        <section className="grid-container">
          {
            // [1, 3] are rows [one ,two] in odd format
            [1, 3].map(num => {
              return (
                <div className={num === 1 ? 'row img': 'row text'} key={num}>
                  <Row row={num} />
                </div>
              )
            })
          }
        </section>
      </main>
    </div>
  )
}

export default Home;
