import styles from './Texts.module.css';

export default function Texts({ fr }) {
  switch(fr?.fraction) {
    case 3: switch (fr?.page) {
      case 1: return (<>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>Nostalgia</h1>
            <h2>Anhelo</h2>
            <h2>Melancolía</h2>
            <h2>Saudade</h2>
          </header>
          <p>
            Y entonces recuperamos por unos instantes esa agradable sensación, casi podemos sentir aquello de nuevo. Nos da la impresión de que lo tenemos frente a nosotros, de que por un momento el tiempo se detiene y la distancia se achica. Cerramos los ojos y volvemos a verlo, o escucharlo, o saborearlo, u olerlo... incluso nos parece que reparamos en detalles que anteriormente no habíamos apreciado.
          </p>
          <p></p>
          <p>
            Pero lo que era cálido pronto se convierte en frío. Lo que fue placentero ahora es doloroso. Lo que casi palpábamos ahora se desvanece. Porque la nostalgia produce placer, pero también do- lor. Mirando al pasado, la <b>nostalgia</b> disfruta en el recuerdo; en el presente, anhela con los sentidos.
          </p>
        </article>
      </>);
      case 2: return <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      default: return <></>;
    }
    case 4: switch (fr?.page) {
      case 1: return (<>
        <article className={styles.article}>
          <p>
            Habita en nosotros un pequeño vacío. Brevemente fue llenado; y sus aguas, desaguadas. ¿Qué lo llenó? Un recuerdo. ¿De dónde vino ese recuerdo?, ¿qué despertó esa presencia que llevaba tanto tiempo dormida? Aunque podríamos sentirnos maravillados por cuán desconocidos, insospechados e increíbles son los mecanis- mos de nuestra mente, la nostalgia que sentimos no nos permite reparar en ellos. Apesadumbrados, nos duele el hecho de que ya no experimentemos ese cúmulo de sensaciones ni esa emoción tan intensa que disfrutamos en el pasado. Descubrimos que eso que hoy añoramos, en ese entonces no tenía tanta importancia. Si lo valoramos ahora es justamente porque lo perdimos. Esta pérdida puede llevarnos a tomar la guitarra, el lápiz, el pincel, la cámara, a bailar o a actuar.
          </p>
          <p>
          La nostalgia es un sentimiento que nos recuerda que no olvide- mos vivir el presente, que en la tristeza también hay belleza y que la nostalgia también se cultiva. Si nuestra mirada se vuelve atrás y no sabemos por qué objeto sentimos nostalgia, si no logramos ver con detalles eso que deseamos volver a sentir, entonces se trata del anhelo. Si la profundidad del dolor es más fuerte que el placer del recuerdo y sentimos un hueco muy profundo en nosotros, lo que sentimos es melancolía. Si en la nostalgia se mezclan el amor, la soledad, el vacío, el desarraigo... seguramen- te se trata de la saudade. Muy propensa esta a sentirse frente al mar, los días de frío.
          </p>
        </article>
      </>);
      case 2: return <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
      default: return <></>;
    }
    default: return <></>;
  }
}
/* 
0 109 138
25 24 24
*/