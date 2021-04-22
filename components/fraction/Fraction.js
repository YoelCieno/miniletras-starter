import styles from './Fraction.module.css'
import texts from './Texts';

export default function Fraction({ fr }) {
  switch (fr?.src) {
    case 'img': return <img className={styles.img} src={`/img/fr_${fr.fraction}-page_${fr.page}.png`}  />;
    case 'text':
      /* fr_3_txt_1 */
      console.log('fr:', fr);
    return (
      <p>Este es un texto de prueba, caca, culo, pedo, piss</p>
     /*  <Texts /> */
    );
    default: return;
  }
}