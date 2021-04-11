import React, { useState } from "react";
import Fraction from "./Fraction";


function Row({row}) {

  const [fractal, setFraction] = useState([0, 1].map(fr => {
    return {
      page: 1,
      isOdd: !fr,
      fraction: row + fr,
      src: row === 1 ? 'Imagen' : 'Texto'
    };
  }));

  function isOdd(n) {
    return Math.abs(n % 2) === 1;
  }

  function limit(num) {
    return num > 1 ? --num : 1;
  }

  function setState(type) {
    return setFraction([0, 1].map(fr => {
      return {
        page: isOdd(type) ? limit(fractal[fr].page) : ++fractal[fr].page,
        src: fractal[fr].src,
        fraction: fractal[fr].fraction,
        isOdd: fractal[fr].isOdd
      }
    }));
  }
  
  return (
    <>
      {
        [0, 1].map(fr => {
          return (
            <article className="fraction" key={fr}>
              <button className="button" onClick={() => setState(++fr)}>
                <Fraction fr={ fractal[fr] } />
                SRC: { fractal[fr].src } Fraction: { fractal[fr].fraction } Page: {fractal[fr].page}
              </button>
            </article>
          )
        })

      }
    </>
  );
}

export default Row;