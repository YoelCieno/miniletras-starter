import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MiniLetras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Cocina tu cuento favorito" />
        <section className="grid-container">
          <article className="fraction"><Button /></article>
          <article className="fraction">2</article>
          <article className="fraction">3</article>
          <article className="fraction">4</article>
          <article className="fraction">5</article>
          <article className="fraction">6</article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
