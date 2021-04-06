import React, { useState } from "react";


function Row(props) {
  console.log('propsButton: init', props);

  function isOdd(n) {
    return Math.abs(n % 2) === 1;
  }

  const [fractal, setFraction] = useState([
    {
      page: 1,
      isOdd: true,
      fraction:props.section,
      src: 'Texto'
    },
    {
      page: 1,
      isOdd: false,
      fraction: props.section + 1,
      src: 'Imagen'
    }
  ]);

  function limit(num) {
    return num > 1 ? num - 1 : 1;
  }

  function setState(type) {
    console.log('fractal:', fractal);
    return setFraction([
      {
        page: isOdd(type) ? limit(fractal[0].page) : fractal[0].page + 1,
        src: fractal[0].src,
        fraction: fractal[0].fraction,
        isOdd: fractal[0].isOdd
      },
      {
        page: isOdd(type) ? limit(fractal[1].page) : fractal[1].page + 1,
        src: fractal[1].src,
        fraction: fractal[1].fraction,
        isOdd: fractal[1].isOdd
      }
    ]);
  }

  return (
    <>
      <article className="fraction">
        <button className="button" onClick={() => setState(1)}>
          SRC: { fractal[0].src } Fraction: { fractal[0].fraction } Page: {fractal[0].page}
        </button>
      </article>
      <article className="fraction">
        <button className="button" onClick={() => setState(2)}>
          SRC: { fractal[1].src } Fraction: { fractal[1].fraction } Page: {fractal[1].page}
        </button>
      </article>
    </>
  );
}

export default Row;