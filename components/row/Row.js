import React, { useState } from "react";
import Fraction from "../fraction/Fraction";
import styles from './Row.module.css';

function Row({ row }) {

  const [fractal, setFraction] = useState([0, 1].map(fr => {
    return {
      page: 1,
      isOdd: !fr,
      fraction: row + fr,
      src: row === 1 ? 'img' : 'text'
    };
  }));

  const [radioState, setRadioState] = useState({
    selected: 'page-1'
  });

  function isOdd(n) {
    return Math.abs(n % 2) === 1;
  }

  function limit(type, num) {
    switch (type) {
      case 'min': return num > 1 ? --num : 1;
      case 'max': return num < 3 ? ++num : 3;
      default: return;
    }
  }

  function setState(type) {
    return setFraction([0, 1].map(fr => {
      return {
        page: limit(isOdd(type) ? 'min' : 'max', fractal[fr].page),
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
            <section className={styles.fraction} key={fr}>
              <input type='radio' name={`row-${row}`} id={`page-${fr + 1}-row-${row}`} />
              <label>
                <button className={
                    `${styles.btn__no_appearance} ${fractal[fr]?.src ? styles.text :  styles.img }`
                  } 
                  onClick={() => setState(++fr)}>
                  <Fraction fr={ fractal[fr] } />
                </button>
              </label>
            </section>
          )
        })
      }
    </>
  );
}

export default Row;