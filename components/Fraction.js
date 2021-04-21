export default function Fraction({ fr }) {
  console.log('fr:', fr);
  switch (fr?.src) {
    case 'img': return <img className="img" src={`/img/fr_${fr.fraction}-page_${fr.page}.png`}  />;
    case 'text':
    return (
      <p>Este es un texto de prueba, caca, culo, pedo, piss</p>
    );
    default: return;
  }
}