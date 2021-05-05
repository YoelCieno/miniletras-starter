import styles from './Texts.module.css';

export default function Texts({ fr }) {
  switch(fr?.fraction) {
    case 3: switch (fr?.sheet) {
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
      case 2: return (<>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>Empatía</h1>
            <h2>Compasión</h2>
            <h2>Simpatía</h2>
          </header>
          <p>
            ¿Es igual el color que tú ves que el que yo veo?, ¿cómo puedo saber que lo vemos igual o de forma diferente? Si no podemos saber si vemos lo mismo, ¿tiene sentido emplear palabras como rojo, amarillo, azul...? Y si nos empeñamos en usarlas, ¿qué podemos hacer cuando alguien se empecina en llamar azul turquesa a lo que nosotros consideramos verde esmeralda?          </p>
          <p></p>
          <p>
            Aunque no es lo mismo un sentimiento que un color, también podemos preguntarnos si aquello que el otro dice sentir significa lo mismo para nosotros, si realmente somos capaces de comprender qué es lo que está sintiendo e, incluso, si somos capaces de apreciar lo que una persona siente cuando nosotros nunca hemos experimentado algo así.
          </p>
        </article>
      </>);
      case 3: return (<>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>Miedo</h1>
            <h2>Temor</h2>
            <h2>Pánico</h2>
          </header>
          <p>
            Hay algo que nos da miedo. Solo pensarlo nos produce intranquilidad. Intentamos en vano distraernos. Una parte de nosotros se esfuerza por quitarlo de la cabeza. Nos decimos, sin mucha convicción, que no pasa nada. Sin embargo, allí sigue. Es más, cada estímulo y cada pensamiento hacen que nos sintamos aún más inseguros. Nuestra imaginación nos juega una mala pasada.
          </p>
          <p></p>
          <p>
            Puede que no haya razones para temer esa cosa o situación que percibimos como amenazante.Y aunque viéndolo con frialdad podríamos concluir que no se trata de un peligro verdadero, que no es justificable nuestra turbación e, incluso, que actuamos de un modo irracional; lo cierto es que lo que sentimos es real y, por lo tanto, vale la pena que nos lo tomemos en serio.
          </p>
        </article>
      </>);
      default: return <></>;
    }
    case 4: switch (fr?.sheet) {
      case 1: return (<>
        <article className={styles.article}>
          <p className={styles.paragraph}>
            Habita en nosotros un pequeño vacío. Brevemente fue llenado; y sus aguas, desaguadas. ¿Qué lo llenó? Un recuerdo. ¿De dónde vino ese recuerdo?, ¿qué despertó esa presencia que llevaba tanto tiempo dormida? Aunque podríamos sentirnos maravillados por cuán desconocidos, insospechados e increíbles son los mecanis- mos de nuestra mente, la nostalgia que sentimos no nos permite reparar en ellos. Apesadumbrados, nos duele el hecho de que ya no experimentemos ese cúmulo de sensaciones ni esa emoción tan intensa que disfrutamos en el pasado. Descubrimos que eso que hoy añoramos, en ese entonces no tenía tanta importancia. Si lo valoramos ahora es justamente porque lo perdimos. Esta pérdida puede llevarnos a tomar la guitarra, el lápiz, el pincel, la cámara, a bailar o a actuar.
          </p>
          <p className={styles.paragraph}>
            La nostalgia es un sentimiento que nos recuerda que no olvidemos vivir el presente, que en la tristeza también hay belleza y que la nostalgia también se cultiva. Si nuestra mirada se vuelve atrás y no sabemos por qué objeto sentimos nostalgia, si no logramos ver con detalles eso que deseamos volver a sentir, entonces se trata del anhelo. Si la profundidad del dolor es más fuerte que el placer del recuerdo y sentimos un hueco muy profundo en nosotros, lo que sentimos es melancolía. Si en la nostalgia se mezclan el amor, la soledad, el vacío, el desarraigo... seguramen- te se trata de la saudade. Muy propensa esta a sentirse frente al mar, los días de frío.
          </p>
        </article>
      </>);
      case 2: return (<>
        <article className={styles.article}>
          <p className={styles.paragraph}>
            Reconocemos los sentimientos de otros, comprendemos lo que sienten y hasta compartimos su sentimiento (nos duele su dolor, nos alegra su alegría, nos contagia su angustia). A esto lo llamamos empatía. Sin embargo, también podemos hablar de empatía cuando nos deleitamos por el fracaso ajeno, cuando un jefe prevé cómo se sentirá el empleado al que va a despedir o cuando ideamos cómo gastarle una inocentada a alguien. Ser empático, a fin de cuentas, es ser capaz de apreciar adecuadamente los sentimientos de esa otra persona, para bien y para mal. Produce simpatía quien nos resulta agradable y consigue que sintamos un vínculo o afinidad especial y compasión aquel que sufre y despierta en nosotros la necesidad de hacer algo.
          </p>
          <p className={styles.paragraph}>
            ¿Qué hace falta para que empaticemos o sintamos compasión? De algún modo, tenemos que sentirnos similares a aquella per- sona que, en principio, es tan distinta a nosotros.Y para con- seguirlo hace falta una narración. Las lágrimas, el reproche, las novelas, la publicidad, la política... todos buscan la empatía. Para que nos pongamos en los zapatos del otro es indispensable que nos cuenten (o nos contemos) un relato emocionante, que nos afecte aquello que le sucede al otro, que su historia nos lleve a tomar partido y se acorte la distancia que nos separa, que poco a poco reconozcamos en el otro aspectos de nosotros mismos, que sintamos, por fin, que lo que el otro siente es lo que nosotros sentimos. Ahora participamos de su sentimiento: vemos las cosas del mismo color.
          </p>
        </article>
      </>);
      case 3: return (<>
        <article className={styles.article}>
          <p className={styles.paragraph}>
            Para que sintamos miedo no solo tiene que haber un objeto peligroso sino, fundamentalmente, la creencia de que hay una amenaza inminente. Da igual que se trate de un fantasma, de hablar en público, de montarnos en un avión o de caminar solos de noche por un descampado... el miedo no lo produce la som- bra que se mueve, ni el auditorio, ni el Boeing 747, ni el terreno abandonado... Lo que lo produce es la forma en que evaluamos la situación. Por eso es importante advertir que aunque estemos convencidos de la amenaza, solo se trata de una posibilidad.Y, por otra parte, aunque pueda ser una reacción equivocada, el miedo es un mecanismo defensivo que nos puede alertar sobre un riesgo real. No hacerles caso a nuestros miedos puede acarrear consecuencias catastróficas.
          </p>
          <p className={styles.paragraph}>
            Sentimos miedo ante una amenaza próxima, temor cuando pen- samos que nos va a ocurrir algo malo y pánico al vernos arras- trados por un peligro inesperado. Reaccionamos de distintas for- mas: luchamos, nos sentimos paralizados, evitamos el contacto o salimos corriendo. Pero también es posible controlar la situación: así como bomberos y soldados aprenden a dominar sus miedos, nosotros también podemos manejar nuestro miedo al abandono, a hacer el ridículo o a la muerte... No se trata de eliminar lo que sentimos, sino de aceptarlo. No se trata de no tener miedo, sino de enfrentarlo y comprenderlo. No se trata de mantener siempre el control, sino de controlar nuestra necesidad de control: de reco- nocer que somos vulnerables y admitir que muchas cosas se esca- pan de nuestras manos. Perdámosle, pues, el miedo a tener miedo.
          </p>
        </article>
      </>);
      default: return <></>;
    }
    default: return <></>;
  }
}
