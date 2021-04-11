export default function Fraction({fr}) {
  console.log('fr:', fr);
  return (
    <img src={`/img/fr_${fr.fraction}-page_${fr.page}.png`}  />
  );
}