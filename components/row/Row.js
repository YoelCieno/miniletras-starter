import React, { useState } from "react";
import Fraction from "../fraction/Fraction";
import styles from './Row.module.css';

function Row({ row }) {

  // [0, 1] are each row fraction => row + fr
  const [fractal, setFraction] = useState([0, 1].map(fr => {
    return {
      sheet: 1,
      isOdd: !fr,
      fraction: row + fr, 
      src: row === 1 ? 'img' : 'text'
    };
  }));

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

  function setFracState(oddOrEven) {
    return setFraction([0, 1].map(fr => {
      return {
        sheet: limit(isOdd(oddOrEven) ? 'min' : 'max', fractal[fr].sheet),
        src: fractal[fr].src,
        fraction: fractal[fr].fraction,
        isOdd: fractal[fr].isOdd
      }
    }));
  }

  function onClickClass(fr) {
    return `${styles.btn__no_appearance} ${styles[fractal[fr]?.src]}`;
  }

  function setRadOnChange(rad) {
    console.log('%c 📢[ radio ]', 'font-size:17px; background:blueviolet; color:#fff;', rad);
    
  }
  return (
    <>
      {
        [0, 1].map(fr => {
          return (
            <section className={styles.fraction} key={fr}>
              <label className={onClickClass(fr)}>
                <input type='radio' name={`row-${row}`} onClick={()=> setFracState(++fr)} onChange={(rad) => setRadOnChange(rad)} />
                <Fraction fr={fractal[fr]} />
              </label>
            </section>
          )
        })
      }
    </>
  );
}

export default Row;