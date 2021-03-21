import React, { useState } from "react";


const Button = props => {
  const [textOrImage, setTextOrImage] = useState({
    typeText: true,
    src: "Texto",
    fraction: props.fraction
  });

  console.log('textOrImage:', textOrImage);
  return (
    <button className="button" onClick={
      () => setTextOrImage({
        typeText: textOrImage.typeText = !textOrImage.typeText,
        src: textOrImage.typeText ? "Texto" : "Imagen",
        fraction: props.fraction
      })
    }>
      { textOrImage.src } { textOrImage.fraction }
    </button>
  );
}

export default Button;