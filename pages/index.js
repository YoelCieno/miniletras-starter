import Head from 'next/head'
import Header from '@components/Header'
import Row from '@components/row/Row'
import { useState } from 'react'

function Home() {

  const [row, setRow] = useState({ zIdxRowOne: 0, zIdxRowTwo: 0 });

  const rowNum = (num) => {
    return { one: num === 1, two: num === 3 }
  };

  function onSetRow(num) {
    return setRow({ zIdxRowOne: rowNum(num).one ? 1 : 0, zIdxRowTwo: rowNum(num).two ? 1 : 0 });
  }

  function setStyleByRow(num) {
    return { zIndex: rowNum(num).one ? row.zIdxRowOne : row.zIdxRowTwo };
  }

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
                <div className={rowNum(num).one ? 'row img' : 'row text'} key={num}
                  style={setStyleByRow(num)} onClick={() => onSetRow(num)}>
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
