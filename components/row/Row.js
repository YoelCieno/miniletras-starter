import React, { useState } from "react";
import Fraction from "../fraction/Fraction";
import styles from './Row.module.css';

function Row({ row }) {

  // [0, 1] are each row fraction => row + fr
  const [fractal, setFraction] = useState([0, 1].map(fr => {
    return {
      sheet: 1,
      fraction: row + fr, 
      src: row === 1 ? 'img' : 'text',
      pageType: !fr ? 'odd' : 'even'
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
        pageType: fractal[fr].pageType
      }
    }));
  }

  function sectionClass(fr) {
    return `${styles.page} ${styles[fractal[fr]?.pageType]}`;
  }

  function onLabelClass(fr) {
    return `${styles[`sheet-${fractal[fr]?.sheet}`]}`;
  }

  return (
    <>
      {
        [0, 1].map(fr => {
          return (
            <section className={sectionClass(fr)} key={fr}>
              <label className={onLabelClass(fr)} onClick={()=> setFracState(++fr)}>
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